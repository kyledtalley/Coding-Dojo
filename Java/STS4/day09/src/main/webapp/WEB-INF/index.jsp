<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home Page</title>
</head>
<body>
	<form action="/process" method="POST">
	<c:out value = "${error }"></c:out>
		<input type="text" name ="secret"/>
		<input type="number" name="secretNumber">
		<button class="btn btn=dark">Submit</button>
	</form>
</body>
</html>