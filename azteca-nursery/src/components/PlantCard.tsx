import { useState } from 'react';
import { Image, Modal, Button } from 'react-bootstrap';

type Plant = {
    id: number;
    image: string;
    name: string;
    price?: number;
    description?: string;
};

interface PlantCardProps {
    plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className="plant-card" onClick={handleOpenModal}>
                <Image
                    className="plant-image"
                    src={plant.image}
                    alt={plant.name}
                />
                <div className="plant-overlay">
                    <h3 
                        style={{
                        color: "#E09540",
                        fontFamily: "Pt Serif",
                        fontSize: "2rem",
                        marginBottom: "0.5rem"
                        }}
                    >
                        {plant.name}
                    </h3>
                    <p
                        style={{
                            color: "#E09540",
                            fontFamily: "Pt Serif",
                            fontSize: "1.5rem",
                        }}
                    >
                        {plant.price ? `$${plant.price}` : 'N/A'}
                    </p>
                </div>
            </div>

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                centered
                contentClassName="custom-modal-content"
            >
                <Modal.Header closeButton className="custom-modal-header"/>
                <Modal.Body>
                    <div className="plant-modal-body">
                        <div className="plant-modal-image">
                            <Image
                                className="plant-modal-img"
                                src={plant.image}
                                alt={plant.name}
                            />

                        </div>
                        <div className="plant-modal-info">
                            <h2 style={{ fontFamily: "Pt Serif", fontSize: "2rem", color: "#242124" }}>{plant.name}</h2>
                            <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#242124" }}>{plant.description}</p>
                            <p style={{ fontSize: "1.5rem", color: "#242124" }}>{plant.price ? `$${plant.price}` : 'N/A'}</p>
                            <Button className="custom-button" style={{ maxWidth: "150px" }}>Check Availability</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
