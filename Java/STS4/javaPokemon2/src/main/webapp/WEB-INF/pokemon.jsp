<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home Page</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body class="bg-dark bg-gradient">

	<img src="${defaultSprite}" alt="Picture of a pokemon" />
	<div class="text-light">
		<h2>Pokemon Stats</h2>
		<table>
			<tr>
				<th>Stat</th>
				<th>Base</th>
			</tr>
			<c:forEach items="${stats}" var="stat">
				<tr>
					<td>${stat.statInfo.name}</td>
					<!-- Assuming 'statInfo' contains the stat information -->
					<td>${stat.baseStat}</td>
					<!-- Assuming 'baseStat' contains the base stat value -->
				</tr>
			</c:forEach>
		</table>
	</div>
</body>
</html>