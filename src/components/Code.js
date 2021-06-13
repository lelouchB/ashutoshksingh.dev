import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"

import styled from "styled-components"

import { copyToClipboard } from "../utils/copy-to-clipboard.js"

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  white-space: pre-wrap;
  max-width: 640px;
  & .token-lline {
    line-height: 1.3em;

    height: 1.3em;
  }

  font-family: "Courier New", Courier, monospace;
`

const LineNo = styled.span`
  display: inline-block;

  width: 2em;

  user-select: none;

  opacity: 0.3;
`

const CopyCode = styled.button`
  position: absolute;
  padding: 5px;
  right: 0.25rem;
  cursor: pointer;
  border: 0;

  border-radius: 3px;

  margin: 0.25em;

  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
`

export const Code = ({ codeString, language, ...props }) => {
  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor />

        <LiveError />

        <LivePreview />
      </LiveProvider>
    )
  }

  const handleClick = () => {
    copyToClipboard(codeString)
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({
        className,

        style,

        tokens,

        getLineProps,

        getTokenProps,
      }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>Copy</CopyCode>

          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>

              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
