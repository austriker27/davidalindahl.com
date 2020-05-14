/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export const Logo = () => (
    <Link to="/">
        <div sx={{ height: "25px", overflow: "hidden" }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 175 35"
                width="175px"
                height="35px"
            >
                <g>
                    <path
                        sx={{ fill: "success" }}
                        d="M2.6,12.5c0-5.1,4.2-9.4,9.4-9.4l0,0V0.5c-3,0-5.6,1-7.8,2.9c-5,4.4-5.5,11.9-1.2,16.9l2-1.7
	C3.5,17,2.6,14.8,2.6,12.5z"
                    />
                    <path
                        sx={{ fill: "secondary" }}
                        d="M12,21.9c-2.8,0-5.4-1.2-7.1-3.2l-2,1.7c0.4,0.5,0.9,0.9,1.4,1.3c5,4.3,12.6,3.6,16.8-1.5l-2-1.7
	C17.4,20.6,14.8,21.9,12,21.9z"
                    />
                    <path
                        sx={{ fill: "primary" }}
                        d="M12,0.5v2.6c5.1,0,9.4,4.2,9.4,9.4c0,2.3-0.8,4.4-2.2,6l2,1.7c1.9-2.3,2.8-4.7,2.8-7.7
	C23.9,5.9,18.6,0.5,12,0.5z"
                    />

                    <text
                        font-family="Inconsolata-Regular_Medium, Inconsolata, monospace"
                        font-size="11.5" x="10" y="2"
                        sx={{ fill: "text" }}>
                        <tspan x="10" y="16">D</tspan>
                    </text>
                </g>

                <text
                    font-family="Inconsolata-Regular_SemiBold, Inconsolata, monospace"
                    font-weight="bold"
                    font-size="18" x="30" y="-0"
                    sx={{ fill: "text" }}>
                    <tspan x="30" y="18">David A. Lindahl</tspan>
                </text>
            </svg>
        </div>
    </Link>
);
