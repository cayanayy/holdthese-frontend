import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";

const Navbar = () => {
    const navigate = useNavigate();
    const codeRef = useRef(null);

    const navigateToItemsPage = (event, code) => {
        event.preventDefault();

        axios
            .get(`${process.env.REACT_APP_API_URL}/${code}`)
            .then(() => {
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
        return false;
    };

    return (
        <div>
            <ToastContainer/>
            <div className="flex flex-col md:flex-row justify-between mx-12 mt-4 items-center">
                <a
                    href="/home"
                    className="no-underline text-primary flex items-center text-5xl font-black"
                >
                    holdthese
                </a>
                <form
                    className="w-1/2 flex items-center font-black rounded-3xl text-lg justify-around min-w-0 p-4 shadow-custom bg-dark-background text-secondary"
                    onSubmit={(e) => navigateToItemsPage(e, codeRef.current.value)}
                >
                    <input
                        required
                        className="flex-auto outline-none font-sans-serif bg-dark-background"
                        type="text"
                        maxLength="8"
                        minLength="1"
                        ref={codeRef}
                        id="code"
                        placeholder="code..."
                    />
                    <input
                        className="font-sans-serif cursor-pointer outline-none text-xl bg-dark-background"
                        type="submit"
                        value="search"
                    />
                </form>
                <a
                    href="/"
                    className="no-underline text-primary flex items-center text-5xl font-black"
                >
                    sign in
                </a>
            </div>
        </div>
    );
};

export default Navbar;
