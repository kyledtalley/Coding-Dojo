<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/main.css" />
<!-- For any Bootstrap that uses JS -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<h1>Hello World!</h1>

		<c:set var="logged in" value="${true}" />
		<c:set var="num" value="${18}" />

		<c:if test="${logged in == true }">
			<c:forEach var="item" items="${myList }">
				<p>
					<c:out value="${item}">
					</c:out>
				</p>
			</c:forEach>
		</c:if>

		<%-- <h2>Club Entry</h2>
	<p>You must be at least 18 to enter</p>
	<c:choose>
		<c:when test="${num>= 18}">
			<p>You are free to enter</p>
		</c:when>
		<c:otherwise>
			<p>Sorry kiddo, maybe next year</p>
		</c:otherwise>
	</c:choose> --%>
	</div>
</body>
</html>