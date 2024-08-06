import Loading from "../errors-and-animations/Loading";

export default function LoadingPage() {
    return (
        <>
            <div id="loading-page" className="d-flex justify-content-center align-items-center">
                <Loading />
            </div>
        </>
    );
}