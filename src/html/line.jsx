import './html.scss'

function Line({ children }) {
    return (
        <>
            <div className="line">
                {children}  <hr />
            </div>
        </>
    );
}

export default Line;