import React from 'react';
import classes from './Paginator.module.scss'
import PropTypes from 'prop-types'

const Paginator = ({currentPage, setCurrentPage, pagesTotal}) => {


    function createPages(pages, pagesCount, currentPage) {
        if(pagesCount > 10) {
            if(currentPage > 5) {
                for (let i = currentPage-4; i <= currentPage+5; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
            else {
                for (let i = 1; i <= 10; i++) {
                    pages.push(i)
                    if(i == pagesCount) break
                }
            }
        }  else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }





    const pagesArr =[];
    createPages(pagesArr,  pagesTotal, currentPage)

    /*for (let i =1; i<pages; i++) {
        pagesArr.push(i)

    }*/

    return (
        <div className={classes.paginator}>
            {pagesArr.map((item)=><span key={item} onClick={()=>setCurrentPage(item)} className={currentPage===item ? classes.active : null}>{item}</span>)}
        </div>
    );
};
Paginator.propTypes = {
    pages: PropTypes.number
};
export default Paginator;