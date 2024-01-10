<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TITLE</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
	<div class="container">



		<table class="table table-striped table-dark mt-3">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Author</th>
					<th scope="col">Actions</th>

				</tr>
			</thead>
			<tbody>
				<c:forEach var="user" items="${allBooks}">
					<tr>
						<td><a href="/book/${book.id}"> <c:out
									value="${book.id}"></c:out>
						</a></td>
						<td><c:out value="${book.title}"></c:out></td>
						<td><c:out value="${book.author}"></c:out></td>
						<td><a href="/book/edit/${book.id}">Edit</a>
							<form action="/book/${book.id}" method="post">
								<input type="hidden" name="_method" value="delete" />
								<button>Delete</button>
							</form>
					</tr>
				</c:forEach>
		</table>



		<a href="/auth/logout">Logout</a>
	</div>
</body>
</html>