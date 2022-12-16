import React from "react";

class ApplyButton extends React.Component {
    hasEmptyNodes = () => {
        const nodes = this.props.allNodeRefs;
        const userType = this.props.interpretUserSelect();

        return !(
            !nodes["nameInput"].current.value ||
            !nodes["surnameInput"].current.value ||
            !nodes["specializationInput"].current.value ||
            userType === 0 ||
            (userType === 1 && !nodes["interestsTextarea"].current.value) ||
            (userType === 2 && !nodes["positionInput"].current.value)
        );
    }

    handleRegistration = () => {
        if (!this.hasEmptyNodes()) {
            alert("Err")
            return
        }
        console.log(this.props.allNodeRefs)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRegistration}>Подтвердить</button>
                <br/><br/>
            </div>
        )
    }
}

export default ApplyButton;
