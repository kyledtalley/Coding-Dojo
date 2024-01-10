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
<title>Home</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>

	<p>${noGameToDisplay}</p>
	<p>${noGameToUpdate }</p>
	<h1>
		Welcome,
		<c:out value="${loggedInUser.firstName}"></c:out>
	</h1>
	
	<a href = "/auth/logout" class="btn btn-dark text-right">Logout</a>
	<a href="/games/create">+ Add your newest game! </a>
	<h2 class="container d-flex align-items-center justify-content-center">Current Games</h2>
	<table class="table">
		<tr>
			<th scope="col">#</th>
			<th scope="col">Title</th>
			<th scope="col">Genre</th>
			<th scope="col">Developer</th>
			<th scope="col">Date Posted</th>
			<th scope="col">Actions</th>
		</tr>
		<c:forEach var="game" items="${allGames }">
			<tr>
				<td><a href="/games/${game.id }"><c:out value="${game.id }"></c:out></a></td>
				<td><c:out value="${game.title }"></c:out></td>
				<td><c:out value="${game.genre }"></c:out></td>
				<td><c:out value="${game.developer.firstName }"></c:out></td>
				<td><c:out value="${game.createdAt }"></c:out></td>
				<c:if test="${game.developer.id == loggedInUser.id }">
					<td><a href="/games/edit/${game.id}">Edit</a>

						<form action="/games/${game.id}" method="post">
							<input type="hidden" name="_method" value="delete" />
							<button>Delete</button>
						</form>
				</c:if>
			</tr>
		</c:forEach>
	</table>
</body>
</html>

