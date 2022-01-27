import Repositories from "../repositories";


const RepositoryItem = ({ name, linkToRepo, fullName }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>Full Name: </h4>
            <a
                href={ linkToRepo }
                target="_blank"
                rel="noreferrer" 
            >
                { fullName }
            </a>
        </div>
    );
}

export default RepositoryItem;