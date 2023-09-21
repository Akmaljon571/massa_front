import './html.scss'

function Line({ children }) {
    console.log(children)
    return (
        <>
            <div className="line">
                {children}  <hr />
            </div>
        </>
    );
}

export default Line;