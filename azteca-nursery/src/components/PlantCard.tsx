import { useState } from 'react';
import { Image, Modal, Button } from 'react-bootstrap';

export default function PlantCard() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className="plant-card" onClick={handleOpenModal}>
                <Image
                    className="plant-image"
                    src="/images/plants/123_1 2.JPEG"
                    alt="Plant"
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
                        Plant Name
                    </h3>
                    <p
                        style={{
                        color: "#E09540",
                        fontFamily: "Pt Serif",
                        fontSize: "1.5rem",
                        }}
                    >
                        $10
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
                                src="/images/plants/123_1 2.JPEG"
                                alt="Plant"
                            />

                        </div>
                        <div className="plant-modal-info">
                            <h2 style={{ fontFamily: "Pt Serif", fontSize: "2rem", color: "#242124" }}>Plant name</h2>
                            <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#242124" }}>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
                            <p style={{ fontSize: "1.5rem", color: "#242124" }}>$10</p>
                            <Button className="custom-button" style={{ maxWidth: "150px" }}>Check Availability</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};
