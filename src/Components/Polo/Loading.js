import classes from "./Loading.css"
const Loading = () => {
    return (
        <div  className = {classes["loading"]}>
  <div className = {classes["dot"]}></div>
  <div className = {classes["dot"]}></div>
  <div className = {classes["dot"]}></div>
  <div className = {classes["dot"]}></div>
  <div className = {classes["dot"]}></div>
</div>
    )
}
export default Loading;