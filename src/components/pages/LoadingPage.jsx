import Loading from "../errors-animations-functions/Loading";

export default function LoadingPage() {
    return (
        <>
            <div id="loading-page" className="d-flex justify-content-center align-items-center">
                <Loading />
            </div>
        </>
    );
}