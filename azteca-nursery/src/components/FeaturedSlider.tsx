import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { MouseEventHandler } from "react";
import Slider from "react-slick";
import PlantCard from "@/components/PlantCard";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

type Plant = {
    id: number;
    image: string;
    name: string;
    price?: number;
    description?: string;
};

interface PlantSliderProps {
    plants: Plant[];
}

interface CustomArrowProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    icon: React.ReactNode;
}

function CustomArrows({ className, onClick, icon }: CustomArrowProps) {
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#E09540",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                opacity: 0.6,
                zIndex: 2,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
        >
            {icon}
        </div>
    );
}

export default function PlantSlider({ plants }: PlantSliderProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        nextArrow: <CustomArrows icon={<ArrowRight size={25} color="#ffffff" />} />,
        prevArrow: <CustomArrows icon={<ArrowLeft size={25} color="#ffffff" />} />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false } },
        ],
    };

    return (
        <Slider {...settings}>
            {plants.map((plant) => (
                <div key={plant.id} style={{ display: 'flex', justifyContent: 'center', padding: "0 10px" }}>
                    <PlantCard plant={plant} />
                </div>
            ))}
        </Slider>
    );
}
