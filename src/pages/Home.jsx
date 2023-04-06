import Navbar from "../components/Navbar";
import {useState, useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Home = () => {
    const [open, setIsOpen] = useState(false),
        navigate = useNavigate(),
        codeRef = useRef(null),
        durationRef = useRef(null),
        openForm = () => setIsOpen(true);
    //

    function createNewAccessCode(event, code, duration) {
        event.preventDefault();
        axios
            .post(`${process.env.REACT_APP_API_URL}`, {
                code: code,
                duration: duration,
            })
            .then((res) => {
                navigate(`/${code}`);
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }

    return (
        <div>
            <Navbar/>
            <div className="flex justify-center items-center mt-12">
                <button
                    className="text-primary shadow-custom rounded-2xl mx-4 my-4 p-4 font-black font-sans"
                    style={{display: `${!open ? "block" : "none"}`}}
                    onClick={openForm}
                >
                    create new code
                </button>
                <form
                    onSubmit={(e) =>
                        createNewAccessCode(
                            e,
                            codeRef.current.value,
                            durationRef.current.value
                        )
                    }
                    id="form"
                    className="mx-4 my-4  w-1/2 animate-bouncing"
                    style={{display: `${open ? "block" : "none"}`}}
                >
                    <div className="flex flex-col lg:flex-row">
                        <input
                            type="text"
                            ref={codeRef}
                            placeholder="access code..."
                            required
                            className="flex-1 rounded-2xl lg:m-0 lg:rounded-r-none border-background outline-none text-secondary bg-background font-medium text-2xl font-sans my-2 p-4"
                        />
                        <input
                            type="number"
                            ref={durationRef}
                            minLength="1"
                            placeholder="duration (min)"
                            required
                            className="rounded-2xl  lg:m-0 lg:rounded-none border-background outline-none text-secondary bg-background font-medium text-2xl font-sans my-2 p-4"
                        />
                        <input
                            type="submit"
                            value="| create new code"
                            className="p-4 lg:rounded-l-none text-secondary font-sans font-black text-lg cursor-pointer bg-background rounded-2xl"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Home;
