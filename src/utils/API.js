import axios from "axios";

export default {
    //this gets all the player data
    getPlayers: function (req,res) {
        console.log()
        return axios.get("https://damp-meadow-42440.herokuapp.com/api/player1/", )
    },
 
    getPlayerA: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("https://damp-meadow-42440.herokuapp.com/api/teamA/", )
    },

    getPlayerB: function (req,res) {
        //console.log("getPlayers called")
        return axios.get("https://damp-meadow-42440.herokuapp.com/api/teamB/", )
    },

    savePlayer1: function (player1Stats) {
        
        return axios.post("https://damp-meadow-42440.herokuapp.com/api/teamA/", player1Stats)
    },

    savePlayer2: function(player2Stats) {
        return axios.post("https://damp-meadow-42440.herokuapp.com/api/teamB/", player2Stats)
    },

    clearTeam1: function (id) {
        return axios.delete("https://damp-meadow-42440.herokuapp.com/api/teamA/", id)
    }
};


