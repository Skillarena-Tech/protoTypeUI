import mapLoader from "@/assets/gifs/mapLoader.gif"

export const LocationPermissionLoader = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={mapLoader} alt="" />
            <div className="lead fw-bold">Please allow  us to use your location for Hyperlocal Job Search</div>
        </div>
    )
}
