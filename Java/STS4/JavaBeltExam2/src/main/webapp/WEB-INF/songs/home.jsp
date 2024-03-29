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
	<h6 class="mx-3 mt-3">
		Welcome,
		<c:out value="${loggedInUser.firstName}"></c:out>
	</h6>

	<table class="table mx-3 mt-3">
		<thead>
			<tr>
				<th scope="col">Song</th>
				<th scope="col"># of Collaborations</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="song" items="${allSongs}">
				<tr>
					<td><a href="/songs/${song.id}"> <c:out
								value="${song.title}"></c:out>

					</a> <p></p><c:out value="${song.genre}"></c:out></td>

					 <td><c:out value="${numOfCollabs}"></c:out></td> 
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href="/songs/create" class="btn btn-dark mx-3">< new song</a>
</body>
</html>

