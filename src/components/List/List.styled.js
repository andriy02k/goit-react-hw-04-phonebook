import styled from "styled-components";

export const Lists = styled.ul(() => {
    return {
        paddingLeft: '60px',
        li: {
            padding: '2px 6px 2px 0',
            button: {
                width: '62px',
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '4px',
                marginLeft: '12px',
                '&:hover': {
                    backgroundColor: 'rgb(23, 70, 164)',
                    border: '1px solid white',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
                }
            }
        }
    };
});