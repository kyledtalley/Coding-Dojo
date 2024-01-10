<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="/process" method="POST">
		<c:out value="${error }"></c:out>
		<label>Choose a number between 5-25: </label> <input type="number"
			name="num" /> <label>Choose a city: </label> <input type="text"
			name="city" /> <label> Enter professional endeavor or hobby:
		</label> <input type="text" name="profession" /> <label>Enter the
			name of any real person: </label> <input type="text" name="name" /> <label>Enter
			any type of living thing: </label> <input type="text" name="livingThing" />
		<label>Enter something nice to someone: </label> <input type="text"
			name="somethingNice" />
		<button class="btn btn=dark">Submit</button>
	</form>
</body>
</html>