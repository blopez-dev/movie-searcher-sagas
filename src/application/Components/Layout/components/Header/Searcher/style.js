import styled from 'styled-components';

const InputSearch = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  justify-content: center;
    input{
      display:block;
      width:100%;
      background:transparent;
      border-top:none;
      border-left:none;
      border-right:none;
       &:focus,
       &:active{
         color:#fff;
       }
      &:focus-within{
        border:none !important;
      }
    }
  .ant-input-group-addon{
      background:transparent;
    button{
      background-color:transparent;
      border:0;
      .anticon-search{
        color:#fff;
      }
    }
  }
`;

export default InputSearch;
