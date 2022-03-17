const LoginButton = () => {
    return (
        <>
            <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button" data-modal-toggle="defaultModal">
                Toggle modal
            </button>
            <div id="defaultModal" aria-hidden="true"
                 className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            </div>
        [</>
    )
}
export default LoginButton;
