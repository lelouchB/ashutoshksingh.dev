import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PostContainerWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 2px 3px 4px 6px #ccc;
  border-radius:10px;
  text-align: center;

  h2 {
    font-size: 1.6rem;
    margin: 0.75rem 0;
    font-weight: 500;
    color: {$props=>props.theme.colors.primaryDarkest};
  }
  p {
    font-size: 0.8rem;
  }
  span {
    font-size: 0.75rem;
    margin: 0.2rem 0;
    font-weight: 400;
    color: #949494;
  }

 
`

const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 0.45rem 0.5rem;
  margin-top: 0.4rem;
  font-size: 0.9rem;
  background-color: #6a5acd;
  border-radius: 0.5rem;
  width: fit-content;
  font-weight: 600;
  color: white;
  text-decoration: none;
`

export const PostContainer = ({ title, date, excerpt, slug }) => {
  return (
    <PostContainerWrapper>
      <h2>{title}</h2>
      <span>{date}</span>
      <p>{excerpt}</p>
      <ButtonWrapper to={`posts/${slug}`}>Read More</ButtonWrapper>
    </PostContainerWrapper>
  )
}
