<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
		<table class="table table-striped table-dark mt-3">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">User Names</th>
					<th scope="col">User Emails</th>
					<th scope="col">User Passwords(test)</th>

				</tr>
			</thead>
			<tbody>
				<c:forEach var="user" items="${allUsers}">
					<tr>
						<td><c:out value="${user.id}"></c:out></td>
						<td><c:out value="${user.userName}"></c:out></td>
						<td><c:out value="${user.email}"></c:out></td>
						<td><c:out value="${user.password}"></c:out></td>
					</tr>
				</c:forEach>
		</table>
		
</body>
</html>