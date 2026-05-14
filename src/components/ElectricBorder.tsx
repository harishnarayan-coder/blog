import React, { useEffect, useId, useRef, useLayoutEffect, useState, useCallback } from 'react';

interface ElectricBorderProps {
    children: React.ReactNode;
    borderColor?: string;
    showGlow?: boolean;
    glowIntensity?: number;
    speed?: number;
    intensity?: number;
    borderThickness?: number;
    className?: string;
    style?: React.CSSProperties;
    borderRadius?: number;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
    children,
    borderColor = "#9b72ff",
    showGlow = true,
    glowIntensity = 0.5,
    speed = 1.5,
    intensity = 2.5,
    borderThickness = 2,
    className = "",
    style = {},
    borderRadius = 24
}) => {
    const rawId = useId().replace(/[:]/g, "");
    const filterId = `turbulent-displace-${rawId}`;
    const svgRef = useRef<SVGSVGElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const strokeRef = useRef<HTMLDivElement>(null);
    const filterCreatedRef = useRef(false);
    const [isVisible, setIsVisible] = useState(true);

    const shouldAnimate = speed > 0 && isVisible;

    const baseFreq = 0.005 + intensity * 0.0095;
    const octaves = 2; // Hardcoded to 2 to significantly improve rendering performance (down from ~5)
    const displacementScale = 10 + intensity * 5;

    const updateAnim = useCallback(() => {
        const svg = svgRef.current;
        const host = rootRef.current;
        if (!svg || !host) return;

        if (strokeRef.current) {
            if (!filterCreatedRef.current) {
                const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
                if (filterEl) {
                    strokeRef.current.style.filter = `url(#${filterId})`;
                    filterCreatedRef.current = true;
                }
            }
        }

        const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
        const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));

        const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]'));
        const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]'));

        if (dyAnims.length >= 2) {
            dyAnims[0].setAttribute("values", `${height}; 0`);
            dyAnims[1].setAttribute("values", `0; -${height}`);
        }
        if (dxAnims.length >= 2) {
            dxAnims[0].setAttribute("values", `${width}; 0`);
            dxAnims[1].setAttribute("values", `0; -${width}`);
        }

        const baseDur = 6;
        const dur = Math.max(0.001, baseDur / (speed || 1));

        [...dyAnims, ...dxAnims].forEach(a => a.setAttribute("dur", `${dur}s`));

        const disp = svg.querySelector("feDisplacementMap");
        if (disp) disp.setAttribute("scale", String(displacementScale));

        const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
        if (filterEl) {
            filterEl.setAttribute("x", "-200%");
            filterEl.setAttribute("y", "-200%");
            filterEl.setAttribute("width", "500%");
            filterEl.setAttribute("height", "500%");
        }

        requestAnimationFrame(() => {
            [...dyAnims, ...dxAnims].forEach(a => {
                const animateElement = a as SVGAnimateElement;
                if (typeof animateElement.beginElement === "function") {
                    try {
                        animateElement.beginElement();
                    } catch {
                        // ignore
                    }
                }
            });
        });
    }, [filterId, speed]);

    useEffect(() => {
        if (shouldAnimate) {
            updateAnim();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [speed, intensity, shouldAnimate, baseFreq, octaves, displacementScale]);

    useEffect(() => {
        if (svgRef.current && strokeRef.current && !filterCreatedRef.current) {
            const checkFilter = () => {
                const filterEl = svgRef.current?.querySelector(`#${CSS.escape(filterId)}`);
                if (filterEl && strokeRef.current) {
                    strokeRef.current.style.filter = `url(#${filterId})`;
                    filterCreatedRef.current = true;
                } else {
                    setTimeout(checkFilter, 100);
                }
            };
            checkFilter();
        }
    }, [filterId]);

    useLayoutEffect(() => {
        if (!rootRef.current) return;
        const ro = new ResizeObserver(() => {
            if (shouldAnimate) {
                updateAnim();
            }
        });
        ro.observe(rootRef.current);

        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting && speed > 0) {
                    updateAnim();
                }
            });
        }, { rootMargin: "50px", threshold: 0 });

        io.observe(rootRef.current);

        if (shouldAnimate) {
            updateAnim();
        }

        return () => {
            ro.disconnect();
            io.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldAnimate]);

    const vars = {
        "--electric-border-color": borderColor,
        "--eb-border-width": `${borderThickness}px`
    } as React.CSSProperties;

    // Convert glowIntensity mapping
    const hexGlow = Math.floor(glowIntensity * 255).toString(16).padStart(2, "0");

    return (
        <div
            ref={rootRef}
            className={`electric-border-container ${className}`}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "visible",
                ...vars,
                ...style
            }}
        >
            <svg
                ref={svgRef}
                style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
                aria-hidden={true}
                focusable="false"
            >
                <defs>
                    <filter
                        id={filterId}
                        colorInterpolationFilters="sRGB"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                    >
                        <feTurbulence type="turbulence" baseFrequency={baseFreq} numOctaves={octaves} result="noise1" seed="1" />
                        <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                            {shouldAnimate && <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />}
                        </feOffset>

                        <feTurbulence type="turbulence" baseFrequency={baseFreq} numOctaves={octaves} result="noise2" seed="1" />
                        <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                            {shouldAnimate && <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />}
                        </feOffset>

                        <feTurbulence type="turbulence" baseFrequency={baseFreq} numOctaves={octaves} result="noise1" seed="2" />
                        <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                            {shouldAnimate && <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />}
                        </feOffset>

                        <feTurbulence type="turbulence" baseFrequency={baseFreq} numOctaves={octaves} result="noise2" seed="2" />
                        <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                            {shouldAnimate && <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />}
                        </feOffset>

                        <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                        <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                        <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
                        <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale={displacementScale} xChannelSelector="R" yChannelSelector="B" />
                    </filter>
                </defs>
            </svg>

            {/* Border Layers */}
            <div
                style={{
                    position: "absolute",
                    top: `calc(-2px - ${borderThickness / 2}px)`,
                    left: `calc(-2px - ${borderThickness / 2}px)`,
                    bottom: 0,
                    right: 0,
                    width: `calc(100% + ${borderThickness / 2}px)`,
                    height: `calc(100% + ${borderThickness / 2}px)`,
                    pointerEvents: "none",
                    zIndex: 0
                }}
            >
                {/* Main animated stroke */}
                <div
                    ref={strokeRef}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: `${borderRadius}px`,
                        border: `var(--eb-border-width) solid var(--electric-border-color)`,
                        filter: `url(#${filterId})`,
                        zIndex: 10
                    }}
                />
                {/* Single optimized stationary glow layer replacing 3 heavy blur layers */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: `${borderRadius}px`,
                        boxShadow: showGlow ? `0 0 10px 1px ${borderColor}${hexGlow}, inset 0 0 10px 1px ${borderColor}${hexGlow}` : "none",
                        zIndex: 8,
                        opacity: showGlow ? 1 : 0
                    }}
                />
            </div>

            {/* Content Container */}
            <div style={{ position: "relative", width: "100%", height: "100%", zIndex: 15, pointerEvents: "auto" }}>
                {children}
            </div>
        </div>
    );
}

export default ElectricBorder;
