import React, { useContext, useState } from 'react';
import styled from "styled-components";
import { ModalContext } from "../../HOC/GlobalModalProvider";

const StyledEditModal = styled.div`
    .popup-title,
    .popup-description {
        margin-bottom: 15px;
      }
      
    #popup-title_in,
    #popup-description_in {
        display: block;
        border: 2px solid rgba(253, 229, 99, 0.8);
        border-radius: 4px;
        line-height: 18px;
        padding: 7px;
        font-size: 14px;
        width: calc(100% - 20px);
        color: rgb(34, 37, 37);
        font-family: Helvetica;
        
        :focus {
            outline: none;
            border-color: rgba(183, 182, 238, 0.8);
            box-shadow: 0 0 10px rgba(183, 182, 238, 0.8);
        }
      }
      
    .popup-title_p {
        margin: 5px 0px 10px 0px;
        font-size: 20px;
        line-height: 26px;
        color: #221c1d;
      }
    
    .popup-description_p {
        margin: 10px 0;
        font-size: 16px;
        line-height: 22px;
        color: #5e5556;
    }
    .save-cancel-btn {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        margin-bottom: 8px;
    }

    .popup-save, .popup-cancel {
        font-size: 14px;
        background-color: rgba(253, 229, 99, 0.8);
        padding: 8px 16px;
        color: rgb(34, 37, 37);
        border: none;
        border-radius: 4px;
        margin-right: 14px;
        cursor: pointer;
        transition: 0.4s;
        :last-child {
            margin-right: 0;
        }
        :hover {
            transform: scale(1.2, 1.2) translate(-8%, 8%);
        }
      }

      .popup-cancel {
        background-color: rgb(255, 179, 179, 0.8);
        :hover {
            transform: scale(1.2, 1.2) translate(8%, 8%);
          }
      }
    }
`

const EditModal = (props) => {
    const setModalContent = useContext(ModalContext);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    return (
        <StyledEditModal>
            <div className={"popup-title"}>
                <p className={"popup-title_p"}>Task name</p>
                <textarea id={"popup-title_in"} rows={"2"} defaultValue={props.currentTaskName} onChange={(event) => {setNewTaskName(event.target.value)}}></textarea>
            </div>
            <div className={"popup-description"}>
                <p className={"popup-description_p"}>Task Description</p>
                <textarea id={"popup-description_in"} rows={"4"} defaultValue={props.currentTaskDescription} onChange={(event) => {setNewTaskDescription(event.target.value)}}></textarea>
            </div>
            {/* <div className={"popup_user"}>
                <div className={"popup_user-wrapper"}>
                    <select className={"popup_usernames"}>
                        <option value="1us" className="popup_username">User1</option>
                        <option value="2us" className="popup_username">User2</option>
                        <option value="3us" className="popup_username">User3</option>
                    </select>
                </div>
            </div> */}
            <div className={"save-cancel-btn"}>
                <button className={"popup-save"} id={"popup-save_data"} onClick={() => {
                    if (newTaskName !== '') {
                        props.changeName(props.currentIndex, newTaskName, newTaskDescription);
                    }
                    setModalContent(false);
                }}>Save changes</button>
                <button className={"popup-cancel"} id={"popup-cancel_data"} onClick={() => {
                      setModalContent(false)}}>Cancel</button>
            </div>
            
        </StyledEditModal>
    )
}

export default EditModal;