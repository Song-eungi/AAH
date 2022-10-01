import React from 'react';
function NewsList(props) {
    const arr = props.newsArr;
    const newsElement = arr.map((element, index) => {
        const style = {"fontWeight":"bold" }
        return <div key={index}>
                    <span style={style}>{element[0]}</span>
                    <br />
                    <span >{element[1]}</span>
                </div>
    });

    return <div>{newsElement}</div>
}
export default NewsList;
