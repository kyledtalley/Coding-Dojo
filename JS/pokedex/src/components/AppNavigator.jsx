import React from "react"
import { AppBar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => {
	AppBar: {
		backgroundColor: "black"
	}

})
export default function AppNavigator() {
	const classes = useStyles
	return (
		<AppBar className={classes} position="fixed">
			<Toolbar>
				<Link to="/" className={classes.link}></Link>
			</Toolbar>
		</AppBar>
	)
}
