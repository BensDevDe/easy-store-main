// the user is able to be edited from the admin (if its an admins account)

import {useState, useEffect} from "react";
import {Form, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {useLocation, useNavigate} from "react-router-dom";
import { getUserDetails,  updateUser } from "../actions/userActions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// to dispatch the action immediately
import { USER_UPDATE_RESET } from "../constants/userConstants";

const UserEditScreen = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    const {userId} = useParams();
    console.log("the userId from the params is : ");
    console.log(userId);

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log("the location is: ");
    console.log(location);


    const userDetails = useSelector(state=>state.userDetails);
    const {loading, error, user} = userDetails ;
    
    
    const userUpdate = useSelector(state=>state.userUpdate);
    const {loading: loadingUpdate, error:errorUpdate, success: successUpdate} = userUpdate ;




    useEffect(()=>{

        if (successUpdate){
            dispatch({type:USER_UPDATE_RESET});
            navigate("/admin/userList")
        }else{

            if(!user.name || user._id !== userId){
                dispatch(getUserDetails(userId))
            }else{
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }


    },[dispatch, userId, user, successUpdate,navigate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({_id: userId, name, email, isAdmin}))
    }

    return ( 
        <>
            <Link to = "/admin/userlist" className="btn btn-light my-3">
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit User:</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
                {loading? <Loader/> : error? <Message variant="danger"></Message>:(
                    <Form onSubmit={submitHandler}>

                        <Form.Group controlId="name">
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                        </Form.Group>
                     
                        <br/>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address </Form.Label>
                            <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="isadmin">
                            <Form.Check  type="checkbox" label="Is Admin" value={isAdmin} checked={isAdmin} onChange={(e)=>setIsAdmin(e.target.checked)}></Form.Check>
                        </Form.Group>
                        <br/>
                     
            
                        <Button type="submit" variant="primary">
                            Update
                        </Button>
                    </Form>
                )}
                
            </FormContainer>
        </>
     );
}
 
export default UserEditScreen;