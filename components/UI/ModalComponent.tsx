
import React from "react";
import { Partneritem } from "../../models/partneritem";



interface ModalProps {
    showModal: boolean;
    item: any;
    onClick: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ showModal, item, onClick }) => {
    return (
        <div className={`${showModal ? "custom-modal" : "d-none"} `}>
            <div className="modal-content">
                <div className="modal-head">
                    <span className="modal-close-icon" onClick={onClick}>
                        <i className="fa fa-times text-dark" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="modal-body">
                    <div className="image-wrapper">
                        <img src={item?.image.value[0].url} className="image" />
                        <div className="heading-wrap">

                            <h2>{item?.name.value}</h2>
                        </div>
                    </div>
                    {/* <p className="content m-b-15"
                        dangerouslySetInnerHTML={{ __html: item?.content.value }}
                    /> */}

                    <div className="content-items row">
                        {item?.items.value.map((m: any, index: number) => {
                            var item: Partneritem = m;
                            return (
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="item-card">
                                        <img src={item.image.value[0].url} alt="" className="item-image"/>
                                        <p className="name">{item?.name.value}</p>  
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ModalComponent;
