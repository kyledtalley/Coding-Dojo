<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Fruity Loops</title>
</head>
<body>
	<div class="container">
		<h1>Fruit (yumm)</h1>
		<table class="table">
			<tbody>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>

				<c:forEach var="oneFruit" items="${fruits}">
					<tr>
						<td>
							<p>
								<c:out value="${oneFruit.name}"></c:out>
							</p>
						</td>
						<td><p>
								<c:out value="${oneFruit.price }"></c:out>
							</p></td>
					</tr>
				</c:forEach>

			</tbody>
		</table>
	</div>
</body>
</html>