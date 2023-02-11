"use client"
import React, { useEffect, useRef, useState } from "react";
import { text } from "stream/consumers";

const CheckWordsLength = () => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [val, setVal] = useState<string>()
    
    const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setVal(event.target.value);
    };
    
    useEffect(()=> {if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px"}}, [val]);
    
    
    return (
        <>
        
        <textarea name = "message" id = "message"  ref={textareaRef} style={styles.textareaDefaultStyle} onChange = {textAreaChange}></textarea>
        <br />
        <h3>Length of words in text with spaces:{val?.length} </h3>
    <br />
        <h3>Length of words in text without spaces:</h3>{val?.replace(/\s/g, "").length}
        </>
    )
    
}
const styles: { [name: string]: React.CSSProperties } = {
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textareaDefaultStyle: {
    padding: 5,
    width: 400,
    display: "block",
    resize: "none",
    backgroundColor: "#eee",
  },
};
export default CheckWordsLength;