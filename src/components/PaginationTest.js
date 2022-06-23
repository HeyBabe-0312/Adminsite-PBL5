import {React,useState} from 'react'
import "../styles/pagination.css"
const PaginationTest = ({postsPerPage, totalPosts, paginate, search, searchDone}) => {
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1);
    const handleClick = (event) => {setCurrentPage(event)}
    const [changeClass,setClass] = useState(1);
    const changeClassHandle = (num) => {setClass(num);}
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage);i++){
        if(totalPosts/postsPerPage > 6){
        if(1 <= currentPage && currentPage <= 3){
            if(pageNumbers.length>4) {
                pageNumbers.push(totalPosts/postsPerPage);
                break;
            }
            else pageNumbers.push(i);
        }
        else if (currentPage > 3 && currentPage < totalPosts/postsPerPage - 2){
            pageNumbers.push(1);
            pageNumbers.push(currentPage-1);
            pageNumbers.push(currentPage);
            pageNumbers.push(currentPage+1);
            pageNumbers.push(currentPage+2);
            pageNumbers.push(totalPosts/postsPerPage);
            break;
        }
        else if (currentPage >= totalPosts/postsPerPage - 2 && currentPage <= totalPosts/postsPerPage){
            pageNumbers.push(1);
            pageNumbers.push(totalPosts/postsPerPage-4);
            pageNumbers.push(totalPosts/postsPerPage-3);
            pageNumbers.push(totalPosts/postsPerPage-2);
            pageNumbers.push(totalPosts/postsPerPage-1);
            pageNumbers.push(totalPosts/postsPerPage);
            break;
        }
    }
        else {pageNumbers.push(i);}
    }
    
    return (
            <div className="pagination">
                {pageNumbers.map(number =>( 
                    <div key={number} className="page-item" >
                        <a onClick={function(event){paginate(number);changeClassHandle(number);handleClick(number);searchDone()}} className={search? number==1? 'active': null: changeClass == number ? 'active':null}>
                            {number}
                        </a>
                        </div>
                ))}
            </div>
    )
}
export default PaginationTest
