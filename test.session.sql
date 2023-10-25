-- @block
CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);

-- @block
INSERT INTO Users (email, bio, country)
VALUES
    ('hello@world.com','i love strangers!','US'),
    ('kyletalley@me.com','i am scared of strangers!','US'),
    ('victorwemby@nba.com','i am taller than strangers!','FR');



-- @block
SELECT email, id FROM Users

ORDER BY id DESC
LIMIT 2;


-- @block
CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);

-- @block
INSERT INTO Rooms (owner_id, street)
VALUES
    (1, 'san diego sailboat'),
    (1, 'nantucket cottage'),
    (1, 'vail cabin'),
    (1, 'sf coardboard box');

-- @block
SELECT * FROM Users
LEFT JOIN Rooms
ON Rooms.owner_id = Users.id;
