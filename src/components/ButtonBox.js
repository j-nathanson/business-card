import React from "react";
import { Button } from "reactstrap"

function ButtonBox() {
    return (
        <div className="col-10 d-flex justify-content-between mx-auto">
            <Button href="#" className="email--btn ml-2">
                <i className="fa fa-envelope" /> Email
            </Button>
            <Button href="#" className="linkedin--btn mr-2">
                <i class="fa fa-linkedin-square" ></i> LinkedIn
            </Button>
        </div >
    );
}

export default ButtonBox