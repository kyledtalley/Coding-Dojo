class Player:
    def __init__(self, dict):
        self.dict = dict
        @classmethod
        def get_team(cls, list):
            players = []
            for player in list:
                player_new = cls(player["name"], player["age"],
                    player["position"], player["team"])
                players.append(player_new)
            return players


players = [
    {
        "name": "Kevin Durant",
        "age": 34,
        "position": "small forward",
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum",
        "age": 24,
        "position": "small forward",
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving",
        "age": 32, "position": "Point Guard",
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard",
        "age": 33, "position": "Point Guard",
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid",
        "age": 32, "position": "Power Foward",
        "team": "Philidelphia 76ers"
    },
    {
        "name": "",
        "age": 16,
        "position": "P",
        "team": "en"
    }
]



new_team = []


for dictionary in players:
    for key in players:
        dictionary = new_team


print(new_team)
# new_list_of_dicts = kevin



# jason = players[1]
# new_list_of_dicts[1] = jason

# kyrie = players[2]
# new_list_of_dicts[2] = kyrie

# dame = players[3]
# new_list_of_dicts[3] = dame

# embiid = players[4]
# new_list_of_dicts[4] = embiid

# for keys, values in new_list_of_dicts.items():
#     print[keys][values]


