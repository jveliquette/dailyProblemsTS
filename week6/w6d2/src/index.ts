/* TypeScript Generics: Voter Registration and Ballot Casting Challenge
------------------------------------------------------------------------
PROBLEM STATEMENT:
Consider the scenario where you are tasked with building an online voting system for an upcoming election. Each voter can only vote once, and each vote contains information about the voter and the chosen candidate.

Your task is to build two TypeScript functions:
        1. registerVoter<V>(voter: V, voterSet: Set<V>): Set<V> --> This function will take a voter of generic type V and a Set of voters. The function should add the voter to the Set and return the updated Set. If the voter is already in the Set, it should not be added again.

        2. castVote<V, C>(voter: V, candidate: C, voteMap: Map<V, C>): Map<V, C> --> This function will take a voter of generic type V, a candidate of generic type C, and a Map representing votes cast. The  function should add an entry to the Map where the voter is the key and the candidate is the value, and then return the updated Map. If the voter has already voted (i.e., the voter is already a key in the Map), the function should not allow the vote to be cast again.

Your implementation should make use of TypeScript generics to ensure type safety, and the Set and Map objects to store voters and votes respectively. */

import { createHmac } from "crypto";

type Voter = string;
type Candidate = string;

function registerVoter<V>(voter: V, voterSet: Set<V>): Set<V> {
    // should add the voter to the set
    // return the updated set
    // if voter is already in the set, it should not be added again (don't even have to worry about this - because it's a set)
    if (!voterSet.has(voter)) { // you don't need this BUT it is better code.
        voterSet.add(voter);
    }
    return voterSet;
}

function castVote<V, C>(voter: V, candidate: C, voteMap: Map<V, C>, voterSet: Set<V>): Map<V, C> {
    // should add an entry to the map (voter: key, candidate: value)
    // return the updated map
    // check if person has already voted // if voter is already a key in the map, the function should not allow the vote to be cast again
    if (voterSet.has(voter) && !voteMap.has(voter)) {
        voteMap.set(voter, candidate);
    }
    return voteMap;
}
//////////////////////////////////////////////////////////////////////////////
//----------------------- DO NOT EDIT CODE BELOW ---------------------------//
//////////////////////////////////////////////////////////////////////////////

// Create a set of voters and a map of votes
let voters = new Set<Voter>();
let votes = new Map<Voter, Candidate>();

// Register several voters
voters = registerVoter("Voter1", voters);
voters = registerVoter("Voter2", voters);
voters = registerVoter("Voter3", voters);
// console.log(voters)

// Attempt to register the same voter twice
voters = registerVoter("Voter1", voters);

// Cast votes for several candidates
votes = castVote("Voter1", "Candidate1", votes, voters);
votes = castVote("Voter2", "Candidate2", votes, voters);
votes = castVote("Voter3", "Candidate3", votes, voters);
// console.log(votes)

// Attempt to cast a vote twice with the same voter
votes = castVote("Voter1", "Candidate4", votes, voters);
