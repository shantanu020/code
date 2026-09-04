export default {
  "contest": {
    "title": "Python Collections Challenge",
    "duration_minutes": 45,
    "total_marks": 100,
    "questions": [
      {
        "id": "list_clean_rotate",
        "title": "The Clean List",
        "category": "List",
        "marks": 20,
        "statement": "You are given a list of integers and an integer k. First remove every repeated value while keeping only its first occurrence. Then rotate the resulting list to the right by k positions. Print the final list. If the cleaned list is empty, print EMPTY.",
        "input_format": "The first line contains n and k. The second line contains n integers.",
        "output_format": "Print the resulting integers separated by spaces, or EMPTY.",
        "constraints": "1 <= n <= 50, 0 <= k <= 10^9; values are integers from -20 to 20.",
        "examples": [
          {
            "input": "8 2\n4 2 4 7 2 9 7 1",
            "output": "9 1 4 2 7"
          },
          {
            "input": "5 10\n3 3 3 3 3",
            "output": "3"
          }
        ],
        "test_cases": [
          {
            "input": "38 0\n2 2 0 1 -2 -1 -2 0 -1 -1 -2 2 -1 -2 -2 -1 2 2 -1 -1 0 2 -2 -2 1 -2 0 -2 1 2 -2 2 -2 -2 2 1 -2 -2",
            "expected_output": "2 0 1 -2 -1"
          },
          {
            "input": "12 1\n2 2 -2 0 1 2 -1 2 -2 -2 -1 1",
            "expected_output": "-1 2 -2 0 1"
          },
          {
            "input": "36 2\n0 2 1 -2 -1 -2 0 2 -1 2 2 0 1 -1 1 1 2 1 1 1 -2 -2 -2 2 2 1 1 -2 2 1 1 2 0 2 1 -1",
            "expected_output": "-2 -1 0 2 1"
          },
          {
            "input": "20 5\n-2 2 -1 -1 -1 -2 -2 -2 -2 -2 -2 0 -2 -2 2 0 0 2 -2 0",
            "expected_output": "0 -2 2 -1"
          },
          {
            "input": "34 146\n-2 0 1 2 2 2 1 -1 2 0 -2 0 0 -1 -2 -1 -1 2 -2 1 1 -2 -2 -1 0 -2 2 -1 2 2 1 1 -1 -2",
            "expected_output": "-1 -2 0 1 2"
          },
          {
            "input": "47 10\n-2 2 -1 1 1 1 -2 0 0 2 2 0 2 -2 -1 1 -1 2 0 -1 1 2 1 1 -2 2 1 2 -1 -2 -1 -1 1 -1 2 -1 0 2 2 2 1 -2 1 -2 0 2 1",
            "expected_output": "-2 2 -1 1 0"
          },
          {
            "input": "31 0\n-2 -2 -2 0 -2 2 2 2 -2 1 2 2 -1 0 2 -1 2 2 0 0 0 2 -2 -2 0 1 2 1 1 0 -2",
            "expected_output": "-2 0 2 1 -1"
          },
          {
            "input": "43 5\n2 2 -1 0 0 -1 -2 0 2 -2 1 0 0 1 -2 2 -1 0 1 -2 -2 0 -2 0 2 1 0 2 -1 1 1 1 -1 -1 1 1 -1 1 -1 1 1 1 1",
            "expected_output": "2 -1 0 -2 1"
          },
          {
            "input": "43 1\n-2 0 -2 0 -1 -2 -1 1 -2 -1 -1 -1 -2 -2 -2 2 2 0 -1 -1 1 1 -1 -1 -1 2 0 2 0 1 0 2 0 1 2 2 2 2 -2 0 0 0 0",
            "expected_output": "2 -2 0 -1 1"
          },
          {
            "input": "27 26\n1 -1 2 -2 0 2 -2 -1 2 1 -1 -2 2 2 1 -2 -2 0 2 -1 -2 -2 -1 -1 0 -2 1",
            "expected_output": "0 1 -1 2 -2"
          },
          {
            "input": "33 1\n1 2 1 -1 -1 -1 -1 -1 -2 -1 0 -1 2 -1 0 0 -1 0 -2 -2 1 0 2 -2 0 1 2 1 1 -2 0 0 2",
            "expected_output": "0 1 2 -1 -2"
          },
          {
            "input": "44 10\n2 -1 -2 -2 -1 2 2 2 1 1 2 -1 2 2 0 1 1 -2 -2 -1 -1 -2 1 2 0 -1 -2 1 -2 -2 -1 1 -2 -1 2 1 0 1 1 2 0 2 -1 -2",
            "expected_output": "2 -1 -2 1 0"
          },
          {
            "input": "26 71\n-2 1 -1 1 0 0 -2 1 0 -1 -1 -2 -1 2 2 -2 -2 -2 -1 0 -1 -2 -2 -1 -1 -2",
            "expected_output": "2 -2 1 -1 0"
          },
          {
            "input": "21 0\n2 2 0 0 2 1 -2 -2 0 1 -1 1 0 -1 -1 -2 1 1 0 0 -2",
            "expected_output": "2 0 1 -2 -1"
          },
          {
            "input": "34 1\n1 2 -2 0 -1 1 0 -2 0 -1 -1 -2 -2 2 2 -1 -1 0 1 0 1 1 2 -1 2 -2 2 -1 2 2 1 2 2 0",
            "expected_output": "-1 1 2 -2 0"
          },
          {
            "input": "2 10\n1 2",
            "expected_output": "1 2"
          },
          {
            "input": "46 5\n0 0 0 2 1 2 1 1 -1 2 1 2 -1 -1 0 0 1 2 1 -2 -2 -2 -2 1 1 1 -2 0 -2 2 -2 -1 -1 -1 1 -1 1 0 0 -2 2 0 -2 2 2 2",
            "expected_output": "0 2 1 -1 -2"
          },
          {
            "input": "49 5\n-2 -1 1 1 2 0 -2 -2 0 -2 -2 1 0 -2 -2 2 2 -1 0 -2 0 -1 2 0 -2 -1 1 2 0 0 -2 2 1 -1 0 -2 -2 1 2 0 2 -1 1 0 -2 1 2 2 0",
            "expected_output": "-2 -1 1 2 0"
          },
          {
            "input": "43 1000000000\n-2 1 0 -2 1 -2 -1 1 2 2 -2 -1 2 1 0 2 -1 -1 2 -1 0 -1 2 -1 -1 2 2 -2 2 -2 0 -2 -2 -1 2 0 0 1 -2 -1 1 -1 -2",
            "expected_output": "-2 1 0 -1 2"
          },
          {
            "input": "16 1000000000\n1 1 0 1 -1 -1 -2 0 -1 1 -1 1 1 1 -2 2",
            "expected_output": "1 0 -1 -2 2"
          },
          {
            "input": "41 5\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40",
            "expected_output": "36 37 38 39 40 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35"
          },
          {
            "input": "8 5\n0 1 2 3 4 5 6 7",
            "expected_output": "3 4 5 6 7 0 1 2"
          },
          {
            "input": "21 0\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",
            "expected_output": "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
          },
          {
            "input": "50 98\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49",
            "expected_output": "2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 0 1"
          },
          {
            "input": "43 1000000000\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42",
            "expected_output": "2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 0 1"
          },
          {
            "input": "7 124\n0 1 2 3 4 5 6",
            "expected_output": "2 3 4 5 6 0 1"
          },
          {
            "input": "13 10\n0 1 2 3 4 5 6 7 8 9 10 11 12",
            "expected_output": "3 4 5 6 7 8 9 10 11 12 0 1 2"
          },
          {
            "input": "24 1\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23",
            "expected_output": "23 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22"
          },
          {
            "input": "36 1000000000\n0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35",
            "expected_output": "8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 0 1 2 3 4 5 6 7"
          },
          {
            "input": "5 1000000000\n0 1 2 3 4",
            "expected_output": "0 1 2 3 4"
          },
          {
            "input": "36 55\n36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20"
          },
          {
            "input": "28 10\n28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "10 9 8 7 6 5 4 3 2 1 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11"
          },
          {
            "input": "30 5\n30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "5 4 3 2 1 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6"
          },
          {
            "input": "11 2\n11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "2 1 11 10 9 8 7 6 5 4 3"
          },
          {
            "input": "30 1\n30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "1 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2"
          },
          {
            "input": "9 0\n9 8 7 6 5 4 3 2 1",
            "expected_output": "9 8 7 6 5 4 3 2 1"
          },
          {
            "input": "33 1\n33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "1 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2"
          },
          {
            "input": "1 0\n1",
            "expected_output": "1"
          },
          {
            "input": "28 10\n28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "10 9 8 7 6 5 4 3 2 1 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11"
          },
          {
            "input": "37 1\n37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1",
            "expected_output": "1 37 36 35 34 33 32 31 30 29 28 27 26 25 24 23 22 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2"
          },
          {
            "input": "11 2\n14 -17 6 18 -15 -2 16 18 -3 6 10",
            "expected_output": "-3 10 14 -17 6 18 -15 -2 16"
          },
          {
            "input": "8 1\n-14 -7 16 -12 20 -10 17 -1",
            "expected_output": "-1 -14 -7 16 -12 20 -10 17"
          },
          {
            "input": "11 0\n1 -11 -16 18 -5 -5 -7 -5 11 -10 1",
            "expected_output": "1 -11 -16 18 -5 -7 11 -10"
          },
          {
            "input": "36 1000000000\n-1 10 7 -12 15 -13 -6 1 1 -6 19 12 17 -4 14 -9 -11 -11 17 5 16 -9 -16 -12 -20 6 -19 5 7 -8 6 13 20 -9 16 3",
            "expected_output": "-1 10 7 -12 15 -13 -6 1 19 12 17 -4 14 -9 -11 5 16 -16 -20 6 -19 -8 13 20 3"
          },
          {
            "input": "44 1000000000\n-1 -20 12 19 -10 5 19 -8 -13 -8 9 -10 -8 -11 -10 0 -10 17 5 -8 10 11 0 1 -7 -6 2 8 19 -18 -11 -17 2 19 -8 -1 19 -7 18 -2 10 20 -20 -14",
            "expected_output": "-1 -20 12 19 -10 5 -8 -13 9 -11 0 17 10 11 1 -7 -6 2 8 -18 -17 18 -2 20 -14"
          },
          {
            "input": "30 1\n16 2 -19 -5 12 17 -15 8 -14 -18 10 -8 -10 5 18 -3 10 7 17 -15 -8 -14 20 9 -19 15 -1 -14 -10 15",
            "expected_output": "-1 16 2 -19 -5 12 17 -15 8 -14 -18 10 -8 -10 5 18 -3 7 20 9 15"
          },
          {
            "input": "49 61\n-12 -7 13 8 -12 -7 9 0 2 -18 7 -15 -14 -1 -16 -1 -20 -8 -8 0 -7 -5 14 -16 0 -20 20 14 -15 10 0 -8 -13 -13 -9 19 5 9 6 5 3 6 -14 -6 2 9 -12 17 10",
            "expected_output": "-9 19 5 6 3 -6 17 -12 -7 13 8 9 0 2 -18 7 -15 -14 -1 -16 -20 -8 -5 14 20 10 -13"
          },
          {
            "input": "32 2\n-4 14 -17 -15 8 -18 20 13 -7 -20 20 -6 -17 -2 6 12 2 8 -2 -15 13 14 18 2 -1 7 -5 -18 6 17 -12 -2",
            "expected_output": "17 -12 -4 14 -17 -15 8 -18 20 13 -7 -20 -6 -2 6 12 2 18 -1 7 -5"
          },
          {
            "input": "4 1\n-11 -15 10 16",
            "expected_output": "16 -11 -15 10"
          },
          {
            "input": "30 10\n19 2 5 -4 -3 -4 -11 -13 -10 16 5 -19 -15 2 -13 -18 0 -19 2 -9 4 -6 -18 -12 15 7 6 -10 5 11",
            "expected_output": "-18 0 -9 4 -6 -12 15 7 6 11 19 2 5 -4 -3 -11 -13 -10 16 -19 -15"
          },
          {
            "input": "34 190\n13 9 5 -19 9 -1 20 -14 -16 0 1 -8 -3 -1 -14 -6 15 19 12 -15 20 -20 -9 19 -20 -6 11 6 11 2 17 -1 -13 -5",
            "expected_output": "-8 -3 -6 15 19 12 -15 -20 -9 11 6 2 17 -13 -5 13 9 5 -19 -1 20 -14 -16 0 1"
          },
          {
            "input": "40 1000000000\n6 4 15 8 4 6 2 7 15 8 1 -18 -15 -12 0 -9 -8 -16 -9 -18 8 -5 11 19 11 1 16 19 -14 18 -14 0 13 -10 -11 -19 12 -13 -2 -8",
            "expected_output": "-2 6 4 15 8 2 7 1 -18 -15 -12 0 -9 -8 -16 -5 11 19 16 -14 18 13 -10 -11 -19 12 -13"
          },
          {
            "input": "30 5\n-2 7 15 15 -1 -2 17 18 1 18 -20 6 -1 5 2 6 -9 -4 -6 -2 -20 0 20 -4 16 -4 1 11 -13 -19",
            "expected_output": "20 16 11 -13 -19 -2 7 15 -1 17 18 1 -20 6 5 2 -9 -4 -6 0"
          },
          {
            "input": "30 5\n15 -11 4 2 -6 8 -15 10 -3 -20 -18 -13 1 -10 9 4 -5 -12 -20 0 -13 -7 10 -7 -14 -7 -14 8 7 16",
            "expected_output": "0 -7 -14 7 16 15 -11 4 2 -6 8 -15 10 -3 -20 -18 -13 1 -10 9 -5 -12"
          },
          {
            "input": "26 10\n-6 -2 19 -17 1 9 -4 -13 16 -17 -10 8 20 20 2 -2 4 -20 18 -8 10 12 -6 7 -11 -18",
            "expected_output": "2 4 -20 18 -8 10 12 7 -11 -18 -6 -2 19 -17 1 9 -4 -13 16 -10 8 20"
          },
          {
            "input": "26 0\n4 -10 6 -13 1 19 -2 -9 14 -6 -7 -9 -14 14 1 4 16 -13 -20 -6 -4 -5 9 -19 13 3",
            "expected_output": "4 -10 6 -13 1 19 -2 -9 14 -6 -7 -14 16 -20 -4 -5 9 -19 13 3"
          },
          {
            "input": "8 1\n-2 -20 -9 5 11 -5 18 -11",
            "expected_output": "-11 -2 -20 -9 5 11 -5 18"
          },
          {
            "input": "42 10\n9 14 -11 5 15 15 20 0 -8 -3 -6 14 14 15 3 -16 -17 -10 -12 -6 18 11 14 7 -20 12 -13 -7 19 -4 20 15 -20 -5 16 -15 -17 -20 -9 -12 -15 6",
            "expected_output": "12 -13 -7 19 -4 -5 16 -15 -9 6 9 14 -11 5 15 20 0 -8 -3 -6 3 -16 -17 -10 -12 18 11 7 -20"
          },
          {
            "input": "23 1\n-6 5 18 2 18 -3 5 -13 -7 8 8 -20 9 11 -16 -3 -5 11 2 -20 12 -2 14",
            "expected_output": "14 -6 5 18 2 -3 -13 -7 8 -20 9 11 -16 -5 12 -2"
          },
          {
            "input": "45 2\n13 -9 16 -3 17 5 -8 1 13 8 3 3 -13 -5 12 10 -5 5 -1 17 1 13 -6 3 -14 -8 3 11 -11 18 9 -2 17 -9 0 12 -8 5 -14 18 -4 11 -17 3 12",
            "expected_output": "-4 -17 13 -9 16 -3 17 5 -8 1 8 3 -13 -5 12 10 -1 -6 -14 11 -11 18 9 -2 0"
          },
          {
            "input": "26 5\n0 10 -4 2 6 11 10 -17 11 -16 16 -12 -10 20 -6 -19 17 -14 -13 12 13 6 10 18 13 6",
            "expected_output": "-14 -13 12 13 18 0 10 -4 2 6 11 -17 -16 16 -12 -10 20 -6 -19 17"
          },
          {
            "input": "45 1000000000\n-10 -4 3 -2 20 -4 13 19 -9 11 10 -6 2 20 -6 9 3 15 3 -7 -19 6 2 1 -16 7 17 1 -8 1 -1 11 20 -18 -5 -9 3 -17 -2 16 -3 -9 -9 17 -14",
            "expected_output": "2 9 15 -7 -19 6 1 -16 7 17 -8 -1 -18 -5 -17 16 -3 -14 -10 -4 3 -2 20 13 19 -9 11 10 -6"
          },
          {
            "input": "27 5\n9 -15 8 20 12 3 12 11 19 -9 -18 -14 -5 0 -8 -15 -2 4 -4 4 1 -5 -15 -4 -17 11 -12",
            "expected_output": "4 -4 1 -17 -12 9 -15 8 20 12 3 11 19 -9 -18 -14 -5 0 -8 -2"
          },
          {
            "input": "8 5\n15 -2 4 1 -8 -20 12 -20",
            "expected_output": "4 1 -8 -20 12 15 -2"
          },
          {
            "input": "33 105\n5 8 4 -13 -8 13 -8 5 -18 18 -19 6 -19 17 7 -17 -8 18 -18 -3 -11 -16 -10 -19 10 -2 -3 -3 1 -10 -15 -10 14",
            "expected_output": "13 -18 18 -19 6 17 7 -17 -3 -11 -16 -10 10 -2 1 -15 14 5 8 4 -13 -8"
          },
          {
            "input": "21 1\n-1 -5 -13 8 2 7 18 14 -20 18 13 7 9 -1 -9 14 -2 4 3 14 -6",
            "expected_output": "-6 -1 -5 -13 8 2 7 18 14 -20 13 9 -9 -2 4 3"
          },
          {
            "input": "15 1000000000\n3 -14 -6 9 1 -2 12 12 12 -2 -13 14 16 13 12",
            "expected_output": "-14 -6 9 1 -2 12 -13 14 16 13 3"
          },
          {
            "input": "30 10\n5 -8 -1 9 9 -8 -11 -5 12 13 7 -13 -12 18 -17 5 17 -15 1 -3 -8 3 -13 4 6 13 14 -16 9 -4",
            "expected_output": "17 -15 1 -3 3 4 6 14 -16 -4 5 -8 -1 9 -11 -5 12 13 7 -13 -12 18 -17"
          },
          {
            "input": "49 0\n15 -7 -13 3 2 7 -16 -6 -6 -7 3 15 19 16 -13 -4 -9 -19 -5 14 17 -10 7 11 1 -20 -14 5 -3 5 2 -14 -17 -2 -4 -3 14 16 -16 -8 20 9 9 17 -7 -3 -18 -6 0",
            "expected_output": "15 -7 -13 3 2 7 -16 -6 19 16 -4 -9 -19 -5 14 17 -10 11 1 -20 -14 5 -3 -17 -2 -8 20 9 -18 0"
          },
          {
            "input": "48 5\n10 -9 -10 10 -6 -7 -5 10 14 -2 -5 17 0 -2 -8 17 -13 -10 20 9 8 11 -1 -19 -3 -13 -13 -9 -7 -4 -9 10 16 16 9 -17 2 -10 -12 12 16 -17 -7 12 -4 -20 -11 8",
            "expected_output": "2 -12 12 -20 -11 10 -9 -10 -6 -7 -5 14 -2 17 0 -8 -13 20 9 8 11 -1 -19 -3 -4 16 -17"
          },
          {
            "input": "10 5\n-8 -5 17 2 18 -12 16 9 -11 -1",
            "expected_output": "-12 16 9 -11 -1 -8 -5 17 2 18"
          },
          {
            "input": "37 2\n6 11 -13 -16 -5 2 -20 16 4 16 -9 17 13 5 10 -10 -17 -20 11 -4 3 20 0 -3 14 -14 -14 -1 14 -15 1 -11 -5 -4 -17 15 16",
            "expected_output": "-11 15 6 11 -13 -16 -5 2 -20 16 4 -9 17 13 5 10 -10 -17 -4 3 20 0 -3 14 -14 -1 -15 1"
          },
          {
            "input": "3 10\n4 17 13",
            "expected_output": "13 4 17"
          },
          {
            "input": "15 1000000000\n-19 8 9 19 20 -17 0 20 14 -9 -14 -6 8 8 0",
            "expected_output": "8 9 19 20 -17 0 14 -9 -14 -6 -19"
          },
          {
            "input": "3 5\n0 0 -9",
            "expected_output": "-9 0"
          },
          {
            "input": "46 2\n1 -6 6 18 20 12 12 2 -12 -10 -19 -8 7 -13 20 4 19 19 -8 -10 -20 18 3 14 11 11 -13 -16 10 6 -13 -4 17 -1 15 -16 -1 -2 -7 17 15 -18 -2 13 -2 6",
            "expected_output": "-18 13 1 -6 6 18 20 12 2 -12 -10 -19 -8 7 -13 4 19 -20 3 14 11 -16 10 -4 17 -1 15 -2 -7"
          },
          {
            "input": "21 5\n15 19 10 11 -10 5 16 12 -16 5 -1 13 -19 -7 -12 3 13 1 17 1 -18",
            "expected_output": "-12 3 1 17 -18 15 19 10 11 -10 5 16 12 -16 -1 13 -19 -7"
          },
          {
            "input": "37 0\n3 -19 0 -10 1 -11 9 -20 3 14 3 -14 15 19 -7 -15 17 -12 0 4 11 8 -13 -13 7 -6 20 1 -12 -10 7 14 -17 15 9 -7 -9",
            "expected_output": "3 -19 0 -10 1 -11 9 -20 14 -14 15 19 -7 -15 17 -12 4 11 8 -13 7 -6 20 -17 -9"
          },
          {
            "input": "25 1\n1 -4 17 19 9 3 -15 9 13 -1 -2 -14 12 18 2 12 19 6 -6 -19 -13 -6 15 14 -6",
            "expected_output": "14 1 -4 17 19 9 3 -15 13 -1 -2 -14 12 18 2 6 -6 -19 -13 15"
          },
          {
            "input": "35 1\n17 -6 16 14 -13 -15 -18 -8 -6 6 -7 13 -4 -2 -13 -4 0 19 -8 9 9 20 -19 2 -10 17 5 -9 2 -17 -14 5 11 1 -2",
            "expected_output": "1 17 -6 16 14 -13 -15 -18 -8 6 -7 13 -4 -2 0 19 9 20 -19 2 -10 5 -9 -17 -14 11"
          },
          {
            "input": "6 10\n-8 -18 -19 20 -14 10",
            "expected_output": "-19 20 -14 10 -8 -18"
          },
          {
            "input": "47 1000000000\n5 -14 9 4 -7 20 -6 10 13 -15 4 16 19 15 -12 12 8 -16 8 18 1 19 2 10 13 -1 1 16 18 -6 -15 -17 -17 -5 5 -2 3 5 -17 -3 -6 11 -7 -7 -20 -16 4",
            "expected_output": "13 -15 16 19 15 -12 12 8 -16 18 1 2 -1 -17 -5 -2 3 -3 11 -20 5 -14 9 4 -7 20 -6 10"
          },
          {
            "input": "8 36\n-12 4 -13 -6 17 14 -20 8",
            "expected_output": "17 14 -20 8 -12 4 -13 -6"
          },
          {
            "input": "48 2\n-12 6 20 -12 1 -2 -4 -7 -17 -10 19 6 -7 7 -14 -18 -8 13 -11 -11 2 14 -8 -9 -3 -3 -8 -3 15 -12 -11 11 11 15 17 -15 -6 -19 17 0 1 12 -5 10 7 -20 -10 14",
            "expected_output": "10 -20 -12 6 20 1 -2 -4 -7 -17 -10 19 7 -14 -18 -8 13 -11 2 14 -9 -3 15 11 17 -15 -6 -19 0 12 -5"
          },
          {
            "input": "6 5\n-18 17 -13 -14 17 -15",
            "expected_output": "-18 17 -13 -14 -15"
          },
          {
            "input": "14 1000000000\n4 8 12 18 11 -15 -13 12 7 2 -11 -9 12 8",
            "expected_output": "8 12 18 11 -15 -13 7 2 -11 -9 4"
          },
          {
            "input": "36 2\n17 16 20 -9 19 16 16 20 -18 -14 17 -2 -3 -1 2 -15 -14 3 -8 16 -3 -6 0 5 2 -6 -3 -4 -1 13 15 -8 -20 -20 16 2",
            "expected_output": "15 -20 17 16 20 -9 19 -18 -14 -2 -3 -1 2 -15 3 -8 -6 0 5 -4 13"
          },
          {
            "input": "2 0\n5 8",
            "expected_output": "5 8"
          },
          {
            "input": "47 1\n5 17 -11 10 -10 -8 12 7 -13 -18 -19 -16 -11 -1 -15 5 3 -19 -11 0 19 -16 11 18 5 11 -9 -20 -4 -12 -10 2 17 -16 -7 -1 0 19 14 6 -14 2 -15 -16 20 -1 5",
            "expected_output": "20 5 17 -11 10 -10 -8 12 7 -13 -18 -19 -16 -1 -15 3 0 19 11 18 -9 -20 -4 -12 2 -7 14 6 -14"
          },
          {
            "input": "9 1\n2 -14 -16 17 3 8 17 -11 -7",
            "expected_output": "-7 2 -14 -16 17 3 8 -11"
          },
          {
            "input": "49 1\n7 0 -4 1 7 -5 13 -4 5 -15 20 -15 -14 -2 -4 -1 -8 -4 -3 2 -7 -11 0 7 -12 -2 -20 14 4 -20 5 11 14 11 -19 12 6 -3 -2 11 -1 13 18 -11 -9 19 2 3 14",
            "expected_output": "3 7 0 -4 1 -5 13 5 -15 20 -14 -2 -1 -8 -3 2 -7 -11 -12 -20 14 4 11 -19 12 6 18 -9 19"
          },
          {
            "input": "6 2\n-1 10 10 12 -9 17",
            "expected_output": "-9 17 -1 10 12"
          },
          {
            "input": "47 5\n-1 0 11 -8 -19 10 0 15 -14 9 -20 -12 6 -12 19 -2 6 1 16 -4 -7 12 12 -5 8 -3 4 11 -8 -5 16 13 -20 -15 9 -8 -1 -8 -17 -5 7 -18 12 -18 -18 -18 12",
            "expected_output": "13 -15 -17 7 -18 -1 0 11 -8 -19 10 15 -14 9 -20 -12 6 19 -2 1 16 -4 -7 12 -5 8 -3 4"
          },
          {
            "input": "6 1\n5 14 -18 9 -16 6",
            "expected_output": "6 5 14 -18 9 -16"
          },
          {
            "input": "22 1\n0 -18 14 7 9 9 9 -17 3 -15 -14 19 5 -5 11 -16 -9 -17 20 13 -17 -8",
            "expected_output": "-8 0 -18 14 7 9 -17 3 -15 -14 19 5 -5 11 -16 -9 20 13"
          },
          {
            "input": "47 0\n-5 -20 -16 -15 -10 11 18 18 -12 -8 16 11 -4 0 18 13 -19 4 -1 19 20 20 -4 10 -8 -3 11 17 19 10 -16 12 -18 5 12 6 3 4 -3 5 9 11 -12 6 -15 12 -10",
            "expected_output": "-5 -20 -16 -15 -10 11 18 -12 -8 16 -4 0 13 -19 4 -1 19 20 10 -3 17 12 -18 5 6 3 9"
          },
          {
            "input": "15 115\n13 2 7 12 6 1 4 6 19 -11 -8 2 -1 18 -20",
            "expected_output": "7 12 6 1 4 19 -11 -8 -1 18 -20 13 2"
          },
          {
            "input": "17 2\n-2 17 2 13 5 -8 -7 -18 9 10 6 15 -14 -18 -13 17 0",
            "expected_output": "-13 0 -2 17 2 13 5 -8 -7 -18 9 10 6 15 -14"
          },
          {
            "input": "47 5\n-3 13 -12 -13 14 11 15 -19 5 -10 -14 -11 -5 17 15 15 -6 2 14 -8 9 -17 16 15 18 12 19 -11 -3 -6 -1 -6 14 -14 14 -4 -6 3 -6 14 11 -1 -13 6 -7 13 -16",
            "expected_output": "-4 3 6 -7 -16 -3 13 -12 -13 14 11 15 -19 5 -10 -14 -11 -5 17 -6 2 -8 9 -17 16 18 12 19 -1"
          },
          {
            "input": "26 103\n-20 1 19 -18 6 15 10 14 17 -7 -18 18 -16 16 0 -9 -17 -5 -15 -14 12 -18 -15 -6 -9 5",
            "expected_output": "14 17 -7 18 -16 16 0 -9 -17 -5 -15 -14 12 -6 5 -20 1 19 -18 6 15 10"
          }
        ]
      },
      {
        "id": "tuple_records",
        "title": "Tuple Records",
        "category": "Tuple",
        "marks": 20,
        "statement": "Each student record contains a name followed by three integer marks. Treat every record as a tuple. For each record, calculate the total of the three marks. Print the name of the student with the highest total and the total. If two or more students have the same total, choose the student whose record appears first.",
        "input_format": "The first line contains n. Each of the next n lines contains a name and three integer marks.",
        "output_format": "Print: name total",
        "constraints": "1 <= n <= 30; names contain only letters followed optionally by a digit; marks are integers from 0 to 100.",
        "examples": [
          {
            "input": "3\nAsha 70 80 90\nRiya 90 90 50\nNeha 85 80 75",
            "output": "Neha 240"
          },
          {
            "input": "2\nA 100 50 50\nB 80 80 40",
            "output": "A 200"
          }
        ],
        "test_cases": [
          {
            "input": "14\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50\nKaran 50 50 50\nMohan 50 50 50\nTara 50 50 50\nVivek 50 50 50\nNina 50 50 50\nAman 50 50 50\nZoya 50 50 50\nDev 50 50 50\nAsha12 50 50 50\nRiya13 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "18\nAsha 11 0 57\nRiya 45 86 80\nNeha 38 4 71\nIsha 13 49 17\nKaran 51 72 91\nMohan 23 86 23\nTara 46 88 10\nVivek 10 58 65\nNina 32 44 77\nAman 28 35 28\nZoya 35 28 28\nDev 8 43 23\nAsha12 26 40 79\nRiya13 84 100 62\nNeha14 31 86 97\nIsha15 81 14 44\nKaran16 77 28 96\nMohan17 19 38 10",
            "expected_output": "Riya13 246"
          },
          {
            "input": "8\nAsha 88 73 0\nRiya 79 73 55\nNeha 29 15 57\nIsha 6 37 80\nKaran 57 62 72\nMohan 32 77 51\nTara 99 18 92\nVivek 50 84 43",
            "expected_output": "Tara 209"
          },
          {
            "input": "20\nAsha 48 46 93\nRiya 30 61 86\nNeha 15 43 74\nIsha 78 30 61\nKaran 40 91 98\nMohan 5 56 82\nTara 26 1 3\nVivek 41 83 32\nNina 14 60 56\nAman 37 26 36\nZoya 35 76 69\nDev 41 46 23\nAsha12 43 17 59\nRiya13 60 46 62\nNeha14 58 69 14\nIsha15 56 57 30\nKaran16 65 60 35\nMohan17 44 81 2\nTara18 89 98 67\nVivek19 92 8 89",
            "expected_output": "Tara18 254"
          },
          {
            "input": "23\nAsha 40 39 0\nRiya 78 59 43\nNeha 46 58 53\nIsha 54 97 42\nKaran 41 60 97\nMohan 9 95 10\nTara 48 60 71\nVivek 14 12 59\nNina 61 96 4\nAman 75 81 74\nZoya 93 74 89\nDev 50 54 42\nAsha12 21 94 0\nRiya13 38 75 74\nNeha14 27 80 65\nIsha15 57 92 5\nKaran16 82 92 90\nMohan17 52 74 1\nTara18 25 30 8\nVivek19 64 7 82\nNina20 12 40 16\nAman21 76 51 42\nZoya22 73 28 93",
            "expected_output": "Karan16 264"
          },
          {
            "input": "19\nAsha 13 99 28\nRiya 89 72 45\nNeha 18 68 31\nIsha 27 83 22\nKaran 65 81 96\nMohan 31 79 58\nTara 30 44 49\nVivek 29 61 77\nNina 35 46 60\nAman 65 72 56\nZoya 78 29 54\nDev 56 62 45\nAsha12 52 94 76\nRiya13 6 13 85\nNeha14 91 84 98\nIsha15 80 94 27\nKaran16 50 89 78\nMohan17 98 13 81\nTara18 51 91 97",
            "expected_output": "Neha14 273"
          },
          {
            "input": "13\nAsha 52 11 90\nRiya 80 58 59\nNeha 28 94 31\nIsha 9 40 62\nKaran 48 58 98\nMohan 37 14 85\nTara 38 26 49\nVivek 54 85 80\nNina 87 90 89\nAman 51 3 63\nZoya 37 88 10\nDev 23 54 26\nAsha12 100 7 84",
            "expected_output": "Nina 266"
          },
          {
            "input": "16\nAsha 37 83 56\nRiya 63 12 4\nNeha 33 6 4\nIsha 12 20 58\nKaran 28 78 85\nMohan 12 64 61\nTara 81 31 19\nVivek 45 75 73\nNina 16 3 91\nAman 17 12 33\nZoya 68 75 87\nDev 91 53 23\nAsha12 9 57 77\nRiya13 80 26 79\nNeha14 4 9 26\nIsha15 30 96 67",
            "expected_output": "Zoya 230"
          },
          {
            "input": "8\nAsha 78 71 42\nRiya 28 90 85\nNeha 84 66 95\nIsha 2 67 42\nKaran 74 33 48\nMohan 52 29 43\nTara 86 10 60\nVivek 80 4 19",
            "expected_output": "Neha 245"
          },
          {
            "input": "16\nAsha 97 87 30\nRiya 54 16 31\nNeha 4 3 41\nIsha 56 26 17\nKaran 13 97 26\nMohan 11 32 73\nTara 59 64 78\nVivek 16 16 76\nNina 88 13 40\nAman 73 48 18\nZoya 84 95 7\nDev 96 47 12\nAsha12 13 79 39\nRiya13 84 74 69\nNeha14 96 20 85\nIsha15 31 94 74",
            "expected_output": "Riya13 227"
          },
          {
            "input": "14\nAsha 27 37 35\nRiya 50 64 16\nNeha 84 3 61\nIsha 63 38 13\nKaran 14 70 83\nMohan 15 100 54\nTara 86 68 49\nVivek 93 64 84\nNina 7 51 39\nAman 57 17 11\nZoya 30 12 51\nDev 17 36 21\nAsha12 47 62 61\nRiya13 84 89 17",
            "expected_output": "Vivek 241"
          },
          {
            "input": "15\nAsha 58 43 96\nRiya 72 75 64\nNeha 43 2 6\nIsha 85 23 84\nKaran 1 31 33\nMohan 87 65 28\nTara 48 44 65\nVivek 31 9 94\nNina 36 74 97\nAman 11 64 9\nZoya 54 64 97\nDev 25 50 53\nAsha12 73 90 92\nRiya13 88 84 67\nNeha14 51 52 4",
            "expected_output": "Asha12 255"
          },
          {
            "input": "15\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50\nKaran 50 50 50\nMohan 50 50 50\nTara 50 50 50\nVivek 50 50 50\nNina 50 50 50\nAman 50 50 50\nZoya 50 50 50\nDev 50 50 50\nAsha12 50 50 50\nRiya13 50 50 50\nNeha14 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "21\nAsha 90 39 100\nRiya 20 59 68\nNeha 68 1 100\nIsha 3 53 51\nKaran 93 12 100\nMohan 92 47 12\nTara 24 24 65\nVivek 89 93 47\nNina 34 14 8\nAman 20 0 29\nZoya 97 1 22\nDev 53 23 67\nAsha12 94 28 58\nRiya13 90 42 77\nNeha14 95 30 60\nIsha15 29 93 2\nKaran16 60 38 23\nMohan17 23 40 76\nTara18 27 30 68\nVivek19 38 67 40\nNina20 23 9 62",
            "expected_output": "Asha 229"
          },
          {
            "input": "21\nAsha 44 83 96\nRiya 20 92 59\nNeha 30 73 20\nIsha 79 78 2\nKaran 13 49 38\nMohan 56 72 3\nTara 58 14 7\nVivek 11 69 2\nNina 77 57 78\nAman 17 41 86\nZoya 39 75 32\nDev 89 17 86\nAsha12 83 18 13\nRiya13 40 88 71\nNeha14 2 48 60\nIsha15 29 52 99\nKaran16 44 96 67\nMohan17 63 47 32\nTara18 88 10 13\nVivek19 29 70 58\nNina20 46 32 79",
            "expected_output": "Asha 223"
          },
          {
            "input": "14\nAsha 100 100 100\nRiya 4 12 40\nNeha 78 90 38\nIsha 3 93 30\nKaran 96 38 76\nMohan 59 1 76\nTara 53 93 61\nVivek 89 81 68\nNina 31 58 43\nAman 99 2 55\nZoya 6 0 72\nDev 8 23 71\nAsha12 61 90 40\nRiya13 70 37 17",
            "expected_output": "Asha 300"
          },
          {
            "input": "21\nAsha 40 97 56\nRiya 62 1 72\nNeha 99 37 16\nIsha 54 21 40\nKaran 23 5 52\nMohan 89 10 84\nTara 83 9 70\nVivek 3 66 24\nNina 22 39 3\nAman 77 32 5\nZoya 33 36 67\nDev 57 80 73\nAsha12 42 85 28\nRiya13 100 81 87\nNeha14 26 45 45\nIsha15 79 13 56\nKaran16 60 29 82\nMohan17 55 9 91\nTara18 44 60 65\nVivek19 34 79 16\nNina20 1 43 17",
            "expected_output": "Riya13 268"
          },
          {
            "input": "8\nAsha 90 26 84\nRiya 90 96 50\nNeha 13 70 53\nIsha 59 39 63\nKaran 45 16 27\nMohan 45 9 68\nTara 16 90 9\nVivek 56 76 55",
            "expected_output": "Riya 236"
          },
          {
            "input": "17\nAsha 59 63 79\nRiya 95 58 44\nNeha 96 88 0\nIsha 84 96 3\nKaran 61 58 36\nMohan 30 72 9\nTara 29 39 84\nVivek 41 98 56\nNina 1 26 72\nAman 48 12 55\nZoya 82 10 10\nDev 50 20 63\nAsha12 83 31 25\nRiya13 76 25 99\nNeha14 33 54 6\nIsha15 52 38 73\nKaran16 6 69 31",
            "expected_output": "Asha 201"
          },
          {
            "input": "8\nAsha 71 69 96\nRiya 77 29 98\nNeha 14 62 95\nIsha 4 1 97\nKaran 65 3 59\nMohan 35 22 79\nTara 4 93 72\nVivek 47 84 68",
            "expected_output": "Asha 236"
          },
          {
            "input": "19\nAsha 11 94 67\nRiya 72 1 90\nNeha 78 3 64\nIsha 87 78 47\nKaran 56 8 34\nMohan 64 93 30\nTara 70 26 13\nVivek 72 84 47\nNina 73 71 37\nAman 93 19 5\nZoya 51 4 17\nDev 30 91 93\nAsha12 44 32 90\nRiya13 83 60 95\nNeha14 78 38 44\nIsha15 81 51 63\nKaran16 24 69 16\nMohan17 9 14 77\nTara18 21 36 90",
            "expected_output": "Riya13 238"
          },
          {
            "input": "4\nAsha 51 31 79\nRiya 55 63 10\nNeha 49 59 92\nIsha 99 25 76",
            "expected_output": "Neha 200"
          },
          {
            "input": "20\nAsha 5 55 65\nRiya 56 23 66\nNeha 55 76 69\nIsha 34 8 34\nKaran 66 9 63\nMohan 31 24 30\nTara 14 18 90\nVivek 82 64 7\nNina 58 81 9\nAman 28 1 59\nZoya 58 79 35\nDev 36 71 20\nAsha12 86 25 46\nRiya13 41 19 37\nNeha14 49 64 82\nIsha15 29 5 95\nKaran16 47 37 13\nMohan17 37 40 79\nTara18 35 69 14\nVivek19 52 10 14",
            "expected_output": "Neha 200"
          },
          {
            "input": "4\nAsha 46 72 97\nRiya 79 68 23\nNeha 31 99 45\nIsha 4 25 22",
            "expected_output": "Asha 215"
          },
          {
            "input": "8\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50\nKaran 50 50 50\nMohan 50 50 50\nTara 50 50 50\nVivek 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "19\nAsha 89 25 50\nRiya 74 36 66\nNeha 90 5 10\nIsha 70 17 34\nKaran 57 44 67\nMohan 67 22 68\nTara 47 79 41\nVivek 26 59 72\nNina 24 43 36\nAman 68 82 53\nZoya 16 10 28\nDev 92 50 76\nAsha12 22 20 30\nRiya13 15 11 52\nNeha14 44 48 54\nIsha15 50 73 75\nKaran16 78 79 29\nMohan17 53 45 48\nTara18 80 61 92",
            "expected_output": "Tara18 233"
          },
          {
            "input": "20\nAsha 99 51 70\nRiya 10 65 20\nNeha 55 9 66\nIsha 85 28 62\nKaran 21 43 83\nMohan 42 95 55\nTara 10 31 46\nVivek 17 25 24\nNina 33 79 61\nAman 54 64 81\nZoya 96 25 65\nDev 82 3 13\nAsha12 59 43 65\nRiya13 34 9 22\nNeha14 63 17 97\nIsha15 64 64 3\nKaran16 78 67 58\nMohan17 96 38 40\nTara18 30 52 82\nVivek19 98 14 87",
            "expected_output": "Asha 220"
          },
          {
            "input": "5\nAsha 78 26 13\nRiya 93 44 60\nNeha 47 91 87\nIsha 18 63 54\nKaran 67 50 2",
            "expected_output": "Neha 225"
          },
          {
            "input": "14\nAsha 70 85 64\nRiya 29 49 90\nNeha 54 1 64\nIsha 15 82 97\nKaran 95 80 77\nMohan 6 20 24\nTara 18 98 11\nVivek 11 28 85\nNina 41 49 80\nAman 58 79 70\nZoya 1 94 32\nDev 21 32 56\nAsha12 0 95 56\nRiya13 19 12 51",
            "expected_output": "Karan 252"
          },
          {
            "input": "22\nAsha 30 92 20\nRiya 50 3 45\nNeha 31 5 26\nIsha 74 6 66\nKaran 89 22 36\nMohan 0 10 4\nTara 77 95 54\nVivek 60 88 32\nNina 43 61 94\nAman 72 22 9\nZoya 76 11 62\nDev 78 91 3\nAsha12 70 98 67\nRiya13 65 65 55\nNeha14 76 51 85\nIsha15 49 70 40\nKaran16 21 83 10\nMohan17 51 4 31\nTara18 41 34 67\nVivek19 23 36 80\nNina20 98 52 52\nAman21 47 53 74",
            "expected_output": "Asha12 235"
          },
          {
            "input": "15\nAsha 100 100 100\nRiya 11 1 69\nNeha 65 100 15\nIsha 98 95 10\nKaran 76 36 91\nMohan 54 69 12\nTara 81 88 44\nVivek 24 91 2\nNina 57 97 46\nAman 11 34 54\nZoya 17 38 23\nDev 11 19 81\nAsha12 85 32 6\nRiya13 0 33 3\nNeha14 4 97 54",
            "expected_output": "Asha 300"
          },
          {
            "input": "9\nAsha 39 15 54\nRiya 8 36 71\nNeha 100 58 1\nIsha 75 58 7\nKaran 82 60 25\nMohan 100 45 69\nTara 54 4 17\nVivek 19 11 68\nNina 53 74 27",
            "expected_output": "Mohan 214"
          },
          {
            "input": "25\nAsha 45 72 11\nRiya 86 27 34\nNeha 26 34 82\nIsha 32 79 98\nKaran 42 73 61\nMohan 86 41 32\nTara 90 64 34\nVivek 6 41 47\nNina 35 65 48\nAman 81 99 43\nZoya 70 97 33\nDev 73 80 92\nAsha12 75 15 79\nRiya13 39 90 36\nNeha14 80 84 36\nIsha15 14 21 87\nKaran16 85 33 82\nMohan17 48 53 88\nTara18 30 11 29\nVivek19 36 56 67\nNina20 72 86 48\nAman21 10 78 62\nZoya22 41 30 18\nDev23 26 48 30\nAsha24 1 94 67",
            "expected_output": "Dev 245"
          },
          {
            "input": "4\nAsha 37 53 47\nRiya 39 99 99\nNeha 40 26 5\nIsha 76 88 49",
            "expected_output": "Riya 237"
          },
          {
            "input": "25\nAsha 30 14 10\nRiya 84 77 50\nNeha 81 66 45\nIsha 45 51 41\nKaran 11 70 71\nMohan 97 70 64\nTara 79 40 95\nVivek 37 20 74\nNina 46 7 64\nAman 65 94 49\nZoya 95 88 41\nDev 58 69 6\nAsha12 3 100 6\nRiya13 50 8 5\nNeha14 75 88 28\nIsha15 35 38 17\nKaran16 92 4 31\nMohan17 58 75 61\nTara18 14 14 12\nVivek19 43 35 42\nNina20 20 11 29\nAman21 4 12 98\nZoya22 61 43 8\nDev23 57 66 67\nAsha24 91 84 77",
            "expected_output": "Asha24 252"
          },
          {
            "input": "16\nAsha 65 25 69\nRiya 78 52 49\nNeha 35 32 8\nIsha 20 13 48\nKaran 87 26 40\nMohan 86 61 69\nTara 0 36 36\nVivek 59 68 50\nNina 69 79 41\nAman 96 99 48\nZoya 86 22 28\nDev 54 43 100\nAsha12 49 32 62\nRiya13 41 70 4\nNeha14 49 43 58\nIsha15 65 58 71",
            "expected_output": "Aman 243"
          },
          {
            "input": "1\nAsha 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "20\nAsha 95 30 15\nRiya 6 71 13\nNeha 78 33 9\nIsha 25 93 75\nKaran 5 2 98\nMohan 4 72 90\nTara 42 89 82\nVivek 31 39 48\nNina 19 16 81\nAman 30 24 53\nZoya 3 68 16\nDev 50 23 96\nAsha12 82 75 41\nRiya13 95 75 95\nNeha14 22 62 84\nIsha15 28 5 97\nKaran16 35 17 76\nMohan17 31 52 0\nTara18 26 29 1\nVivek19 63 86 84",
            "expected_output": "Riya13 265"
          },
          {
            "input": "20\nAsha 70 71 37\nRiya 19 86 3\nNeha 67 59 26\nIsha 42 63 42\nKaran 42 96 47\nMohan 51 39 89\nTara 0 87 3\nVivek 35 47 94\nNina 29 54 47\nAman 98 47 87\nZoya 89 8 10\nDev 6 2 88\nAsha12 45 87 100\nRiya13 19 68 42\nNeha14 98 25 79\nIsha15 42 43 31\nKaran16 73 65 74\nMohan17 75 94 38\nTara18 92 23 42\nVivek19 69 41 4",
            "expected_output": "Aman 232"
          },
          {
            "input": "8\nAsha 39 30 49\nRiya 31 62 73\nNeha 59 1 95\nIsha 48 17 33\nKaran 13 79 90\nMohan 96 86 83\nTara 70 96 92\nVivek 51 91 13",
            "expected_output": "Mohan 265"
          },
          {
            "input": "15\nAsha 4 6 34\nRiya 29 87 68\nNeha 58 52 60\nIsha 2 30 78\nKaran 40 12 32\nMohan 10 94 29\nTara 19 92 9\nVivek 6 53 63\nNina 64 13 97\nAman 38 62 64\nZoya 88 65 4\nDev 11 97 37\nAsha12 45 43 47\nRiya13 87 89 33\nNeha14 80 12 4",
            "expected_output": "Riya13 209"
          },
          {
            "input": "29\nAsha 29 65 65\nRiya 96 76 36\nNeha 28 81 25\nIsha 92 31 84\nKaran 89 0 29\nMohan 3 56 67\nTara 45 0 39\nVivek 50 81 2\nNina 63 5 81\nAman 4 92 52\nZoya 44 100 67\nDev 34 89 5\nAsha12 85 48 53\nRiya13 91 45 96\nNeha14 58 74 2\nIsha15 43 58 13\nKaran16 47 19 65\nMohan17 43 58 57\nTara18 68 19 79\nVivek19 86 13 8\nNina20 93 40 83\nAman21 64 5 52\nZoya22 83 66 8\nDev23 46 96 26\nAsha24 39 85 93\nRiya25 80 86 79\nNeha26 62 85 19\nIsha27 95 50 32\nKaran28 42 75 99",
            "expected_output": "Riya25 245"
          },
          {
            "input": "3\nAsha 88 73 8\nRiya 74 13 29\nNeha 53 62 13",
            "expected_output": "Asha 169"
          },
          {
            "input": "23\nAsha 40 79 61\nRiya 10 100 21\nNeha 36 77 87\nIsha 28 23 40\nKaran 37 16 3\nMohan 22 71 28\nTara 9 91 64\nVivek 63 5 87\nNina 63 82 74\nAman 27 13 16\nZoya 63 86 64\nDev 9 56 17\nAsha12 22 14 89\nRiya13 92 69 74\nNeha14 7 32 47\nIsha15 30 82 8\nKaran16 11 82 18\nMohan17 2 19 89\nTara18 15 92 5\nVivek19 7 8 71\nNina20 66 30 14\nAman21 88 32 28\nZoya22 13 79 85",
            "expected_output": "Riya13 235"
          },
          {
            "input": "13\nAsha 39 24 99\nRiya 65 3 4\nNeha 79 88 82\nIsha 5 19 90\nKaran 64 9 8\nMohan 31 75 58\nTara 50 38 80\nVivek 83 8 45\nNina 31 85 75\nAman 15 50 85\nZoya 38 49 8\nDev 64 37 90\nAsha12 59 48 0",
            "expected_output": "Neha 249"
          },
          {
            "input": "3\nAsha 100 100 100\nRiya 79 48 98\nNeha 87 94 91",
            "expected_output": "Asha 300"
          },
          {
            "input": "14\nAsha 73 98 49\nRiya 16 78 33\nNeha 9 30 4\nIsha 1 96 51\nKaran 15 42 79\nMohan 22 4 33\nTara 66 20 62\nVivek 92 92 61\nNina 92 67 28\nAman 87 43 92\nZoya 70 93 56\nDev 71 96 21\nAsha12 0 6 65\nRiya13 46 58 37",
            "expected_output": "Vivek 245"
          },
          {
            "input": "6\nAsha 60 40 62\nRiya 5 30 25\nNeha 27 41 10\nIsha 62 5 77\nKaran 52 82 29\nMohan 90 49 46",
            "expected_output": "Mohan 185"
          },
          {
            "input": "5\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50\nKaran 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "1\nAsha 81 4 37",
            "expected_output": "Asha 122"
          },
          {
            "input": "4\nAsha 42 90 45\nRiya 41 29 92\nNeha 80 0 76\nIsha 85 76 53",
            "expected_output": "Isha 214"
          },
          {
            "input": "26\nAsha 45 55 84\nRiya 38 4 65\nNeha 41 19 4\nIsha 40 16 31\nKaran 93 18 77\nMohan 19 15 28\nTara 57 75 52\nVivek 81 14 21\nNina 97 69 92\nAman 95 87 35\nZoya 42 85 71\nDev 9 15 92\nAsha12 33 56 88\nRiya13 69 26 85\nNeha14 36 97 71\nIsha15 11 81 1\nKaran16 100 68 32\nMohan17 4 99 43\nTara18 57 50 73\nVivek19 37 26 11\nNina20 85 6 55\nAman21 47 72 46\nZoya22 86 9 46\nDev23 25 87 22\nAsha24 99 20 93\nRiya25 69 64 58",
            "expected_output": "Nina 258"
          },
          {
            "input": "8\nAsha 36 31 79\nRiya 15 98 30\nNeha 100 44 28\nIsha 38 27 27\nKaran 35 99 7\nMohan 52 66 2\nTara 84 22 77\nVivek 89 30 76",
            "expected_output": "Vivek 195"
          },
          {
            "input": "10\nAsha 91 96 52\nRiya 11 45 92\nNeha 77 20 70\nIsha 83 58 85\nKaran 11 92 54\nMohan 43 57 14\nTara 79 37 97\nVivek 75 83 47\nNina 70 73 23\nAman 67 42 73",
            "expected_output": "Asha 239"
          },
          {
            "input": "30\nAsha 69 6 45\nRiya 51 38 95\nNeha 66 43 30\nIsha 48 48 41\nKaran 83 89 72\nMohan 36 32 77\nTara 9 56 6\nVivek 57 90 85\nNina 74 1 82\nAman 50 98 63\nZoya 97 27 90\nDev 100 41 3\nAsha12 33 43 72\nRiya13 33 71 8\nNeha14 83 50 25\nIsha15 26 68 97\nKaran16 36 32 96\nMohan17 95 51 65\nTara18 61 84 34\nVivek19 4 37 46\nNina20 48 97 9\nAman21 64 92 61\nZoya22 77 38 75\nDev23 21 18 80\nAsha24 62 39 43\nRiya25 90 80 16\nNeha26 87 12 87\nIsha27 14 18 59\nKaran28 82 14 45\nMohan29 76 26 37",
            "expected_output": "Karan 244"
          },
          {
            "input": "19\nAsha 20 11 64\nRiya 60 43 10\nNeha 71 51 12\nIsha 92 83 65\nKaran 49 70 19\nMohan 62 4 31\nTara 22 22 5\nVivek 46 5 37\nNina 59 98 75\nAman 42 50 52\nZoya 69 71 35\nDev 41 37 22\nAsha12 67 22 71\nRiya13 6 25 96\nNeha14 31 70 53\nIsha15 36 5 6\nKaran16 69 18 20\nMohan17 55 90 18\nTara18 42 21 73",
            "expected_output": "Isha 240"
          },
          {
            "input": "6\nAsha 11 47 64\nRiya 32 90 58\nNeha 88 97 55\nIsha 77 19 27\nKaran 73 3 16\nMohan 2 67 65",
            "expected_output": "Neha 240"
          },
          {
            "input": "10\nAsha 47 99 69\nRiya 35 73 89\nNeha 86 70 92\nIsha 71 75 17\nKaran 56 38 40\nMohan 85 65 70\nTara 63 34 95\nVivek 56 97 93\nNina 32 94 4\nAman 45 55 39",
            "expected_output": "Neha 248"
          },
          {
            "input": "9\nAsha 99 32 43\nRiya 16 43 54\nNeha 24 69 66\nIsha 61 9 93\nKaran 4 65 49\nMohan 96 40 88\nTara 7 44 71\nVivek 92 58 11\nNina 70 20 76",
            "expected_output": "Mohan 224"
          },
          {
            "input": "10\nAsha 46 19 43\nRiya 14 100 76\nNeha 43 32 8\nIsha 93 92 97\nKaran 80 90 78\nMohan 77 31 9\nTara 30 61 8\nVivek 65 34 38\nNina 45 8 13\nAman 59 32 76",
            "expected_output": "Isha 282"
          },
          {
            "input": "8\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50\nKaran 50 50 50\nMohan 50 50 50\nTara 50 50 50\nVivek 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "19\nAsha 2 69 26\nRiya 99 69 67\nNeha 75 32 98\nIsha 76 15 23\nKaran 84 18 75\nMohan 2 91 70\nTara 75 45 12\nVivek 26 26 55\nNina 63 58 22\nAman 56 50 1\nZoya 24 80 60\nDev 58 66 93\nAsha12 9 72 55\nRiya13 12 3 1\nNeha14 49 95 82\nIsha15 73 65 2\nKaran16 56 9 12\nMohan17 51 57 31\nTara18 57 50 80",
            "expected_output": "Riya 235"
          },
          {
            "input": "11\nAsha 19 10 53\nRiya 86 18 34\nNeha 41 89 55\nIsha 56 8 36\nKaran 52 39 98\nMohan 26 62 83\nTara 15 79 92\nVivek 0 9 83\nNina 52 67 86\nAman 94 36 24\nZoya 23 52 24",
            "expected_output": "Nina 205"
          },
          {
            "input": "9\nAsha 37 67 63\nRiya 27 47 83\nNeha 2 25 42\nIsha 50 11 53\nKaran 100 49 88\nMohan 2 2 94\nTara 15 36 4\nVivek 90 41 80\nNina 27 43 26",
            "expected_output": "Karan 237"
          },
          {
            "input": "10\nAsha 38 86 54\nRiya 22 83 42\nNeha 30 28 40\nIsha 96 27 57\nKaran 74 18 31\nMohan 62 91 46\nTara 37 56 85\nVivek 25 31 52\nNina 98 94 49\nAman 38 98 38",
            "expected_output": "Nina 241"
          },
          {
            "input": "14\nAsha 57 55 1\nRiya 30 28 84\nNeha 7 73 97\nIsha 18 65 89\nKaran 22 55 52\nMohan 35 82 52\nTara 14 72 50\nVivek 98 19 25\nNina 8 65 89\nAman 2 18 70\nZoya 87 59 61\nDev 80 5 42\nAsha12 67 78 43\nRiya13 53 44 30",
            "expected_output": "Zoya 207"
          },
          {
            "input": "13\nAsha 17 67 67\nRiya 8 0 22\nNeha 98 17 66\nIsha 5 97 100\nKaran 89 99 90\nMohan 94 58 95\nTara 68 42 91\nVivek 36 100 22\nNina 10 26 99\nAman 100 68 98\nZoya 99 88 92\nDev 44 29 82\nAsha12 25 6 43",
            "expected_output": "Zoya 279"
          },
          {
            "input": "11\nAsha 50 92 87\nRiya 77 75 61\nNeha 28 82 14\nIsha 84 76 75\nKaran 18 28 13\nMohan 42 26 96\nTara 80 77 35\nVivek 46 71 21\nNina 59 62 0\nAman 15 98 68\nZoya 8 62 61",
            "expected_output": "Isha 235"
          },
          {
            "input": "29\nAsha 33 39 89\nRiya 0 90 51\nNeha 89 46 0\nIsha 76 61 27\nKaran 34 23 30\nMohan 64 80 5\nTara 40 77 89\nVivek 18 87 93\nNina 21 46 72\nAman 49 65 46\nZoya 67 69 33\nDev 19 17 8\nAsha12 62 80 51\nRiya13 14 90 36\nNeha14 92 74 21\nIsha15 93 50 22\nKaran16 59 55 82\nMohan17 6 1 34\nTara18 32 47 20\nVivek19 34 41 65\nNina20 65 37 56\nAman21 71 64 61\nZoya22 27 71 16\nDev23 76 16 71\nAsha24 51 74 98\nRiya25 8 41 43\nNeha26 19 42 14\nIsha27 85 69 87\nKaran28 55 70 24",
            "expected_output": "Isha27 241"
          },
          {
            "input": "19\nAsha 24 96 6\nRiya 42 63 13\nNeha 58 68 35\nIsha 58 10 83\nKaran 59 94 24\nMohan 3 10 14\nTara 43 52 55\nVivek 93 60 14\nNina 10 5 13\nAman 56 97 22\nZoya 13 19 44\nDev 56 91 26\nAsha12 52 15 81\nRiya13 47 12 30\nNeha14 25 94 42\nIsha15 77 71 92\nKaran16 42 63 38\nMohan17 82 9 3\nTara18 15 4 99",
            "expected_output": "Isha15 240"
          },
          {
            "input": "13\nAsha 18 19 57\nRiya 20 25 17\nNeha 14 87 83\nIsha 51 0 34\nKaran 38 100 68\nMohan 82 33 40\nTara 76 36 39\nVivek 74 98 7\nNina 33 93 99\nAman 99 7 44\nZoya 87 32 96\nDev 18 25 5\nAsha12 85 18 93",
            "expected_output": "Nina 225"
          },
          {
            "input": "30\nAsha 95 29 76\nRiya 43 23 67\nNeha 61 73 4\nIsha 71 29 89\nKaran 94 100 75\nMohan 14 98 19\nTara 44 78 3\nVivek 100 81 57\nNina 41 97 48\nAman 6 53 72\nZoya 1 41 26\nDev 95 94 96\nAsha12 93 89 34\nRiya13 51 26 58\nNeha14 45 41 44\nIsha15 73 32 41\nKaran16 72 29 83\nMohan17 84 66 86\nTara18 41 36 4\nVivek19 6 89 24\nNina20 38 94 69\nAman21 63 54 14\nZoya22 66 28 15\nDev23 10 40 34\nAsha24 95 25 54\nRiya25 63 41 26\nNeha26 74 23 5\nIsha27 97 60 10\nKaran28 46 70 27\nMohan29 27 35 72",
            "expected_output": "Dev 285"
          },
          {
            "input": "13\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50\nKaran 50 50 50\nMohan 50 50 50\nTara 50 50 50\nVivek 50 50 50\nNina 50 50 50\nAman 50 50 50\nZoya 50 50 50\nDev 50 50 50\nAsha12 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "18\nAsha 24 33 18\nRiya 41 88 9\nNeha 69 3 31\nIsha 94 35 93\nKaran 35 54 17\nMohan 38 55 60\nTara 21 66 40\nVivek 6 86 30\nNina 14 34 22\nAman 96 47 6\nZoya 94 98 64\nDev 45 9 93\nAsha12 30 8 67\nRiya13 77 12 78\nNeha14 5 15 44\nIsha15 17 39 86\nKaran16 48 6 82\nMohan17 16 4 4",
            "expected_output": "Zoya 256"
          },
          {
            "input": "27\nAsha 73 82 37\nRiya 15 76 21\nNeha 8 52 90\nIsha 33 84 49\nKaran 67 51 100\nMohan 81 30 16\nTara 65 41 90\nVivek 87 59 14\nNina 91 79 13\nAman 19 67 16\nZoya 71 23 96\nDev 2 70 91\nAsha12 59 30 47\nRiya13 35 37 40\nNeha14 75 3 73\nIsha15 4 77 62\nKaran16 89 28 32\nMohan17 100 4 92\nTara18 47 20 56\nVivek19 50 15 63\nNina20 64 94 42\nAman21 93 38 11\nZoya22 89 29 48\nDev23 10 40 75\nAsha24 49 56 57\nRiya25 96 44 83\nNeha26 92 48 12",
            "expected_output": "Riya25 223"
          },
          {
            "input": "19\nAsha 100 100 100\nRiya 44 90 31\nNeha 94 72 37\nIsha 80 18 17\nKaran 58 24 1\nMohan 41 47 49\nTara 3 44 67\nVivek 65 40 18\nNina 43 65 94\nAman 25 100 54\nZoya 37 45 68\nDev 81 35 38\nAsha12 25 80 37\nRiya13 19 21 40\nNeha14 41 17 18\nIsha15 88 56 48\nKaran16 62 14 70\nMohan17 16 17 97\nTara18 2 29 30",
            "expected_output": "Asha 300"
          },
          {
            "input": "13\nAsha 75 83 16\nRiya 35 92 48\nNeha 44 10 8\nIsha 48 43 30\nKaran 23 35 59\nMohan 67 41 58\nTara 21 3 6\nVivek 56 2 34\nNina 24 3 14\nAman 7 8 16\nZoya 62 82 3\nDev 97 4 72\nAsha12 69 58 4",
            "expected_output": "Riya 175"
          },
          {
            "input": "15\nAsha 24 20 7\nRiya 95 24 45\nNeha 6 49 32\nIsha 48 31 80\nKaran 94 80 13\nMohan 50 56 85\nTara 79 34 32\nVivek 24 65 28\nNina 2 36 91\nAman 48 42 41\nZoya 26 26 33\nDev 16 33 49\nAsha12 49 69 35\nRiya13 70 57 45\nNeha14 97 73 40",
            "expected_output": "Neha14 210"
          },
          {
            "input": "5\nAsha 15 36 56\nRiya 62 88 0\nNeha 24 40 26\nIsha 30 34 63\nKaran 71 69 92",
            "expected_output": "Karan 232"
          },
          {
            "input": "1\nAsha 35 61 3",
            "expected_output": "Asha 99"
          },
          {
            "input": "10\nAsha 59 5 97\nRiya 15 74 82\nNeha 18 48 64\nIsha 89 8 51\nKaran 95 9 57\nMohan 16 70 100\nTara 16 19 100\nVivek 87 16 26\nNina 94 34 18\nAman 32 73 48",
            "expected_output": "Mohan 186"
          },
          {
            "input": "26\nAsha 26 66 100\nRiya 1 59 24\nNeha 97 44 84\nIsha 26 7 93\nKaran 56 65 64\nMohan 55 95 58\nTara 33 38 96\nVivek 21 21 82\nNina 43 33 62\nAman 21 73 79\nZoya 69 45 35\nDev 60 33 42\nAsha12 7 43 96\nRiya13 88 75 86\nNeha14 33 100 78\nIsha15 78 19 3\nKaran16 77 84 29\nMohan17 15 8 66\nTara18 2 62 100\nVivek19 33 14 94\nNina20 37 16 91\nAman21 40 61 100\nZoya22 19 98 96\nDev23 74 13 36\nAsha24 31 54 11\nRiya25 97 53 83",
            "expected_output": "Riya13 249"
          },
          {
            "input": "15\nAsha 18 29 95\nRiya 43 56 4\nNeha 34 92 35\nIsha 36 89 73\nKaran 81 51 79\nMohan 31 33 89\nTara 0 56 71\nVivek 67 5 3\nNina 64 80 97\nAman 20 72 75\nZoya 52 76 37\nDev 95 6 64\nAsha12 25 7 44\nRiya13 96 7 37\nNeha14 79 75 26",
            "expected_output": "Nina 241"
          },
          {
            "input": "15\nAsha 10 55 14\nRiya 0 34 83\nNeha 67 76 63\nIsha 67 99 94\nKaran 42 55 67\nMohan 60 10 27\nTara 60 92 39\nVivek 80 20 20\nNina 49 31 52\nAman 86 57 23\nZoya 34 6 30\nDev 28 25 25\nAsha12 96 44 41\nRiya13 47 3 56\nNeha14 68 2 75",
            "expected_output": "Isha 260"
          },
          {
            "input": "4\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "21\nAsha 14 71 17\nRiya 56 4 82\nNeha 43 78 99\nIsha 77 51 7\nKaran 59 53 18\nMohan 35 34 52\nTara 98 100 86\nVivek 13 88 6\nNina 24 77 80\nAman 95 50 65\nZoya 30 76 94\nDev 93 18 80\nAsha12 15 5 92\nRiya13 86 95 7\nNeha14 40 43 17\nIsha15 41 23 70\nKaran16 55 45 28\nMohan17 50 92 98\nTara18 29 19 54\nVivek19 90 10 44\nNina20 69 80 93",
            "expected_output": "Tara 284"
          },
          {
            "input": "12\nAsha 3 72 32\nRiya 46 46 33\nNeha 2 35 9\nIsha 30 91 33\nKaran 61 43 74\nMohan 26 28 30\nTara 45 34 41\nVivek 94 11 49\nNina 22 9 12\nAman 85 56 5\nZoya 57 7 61\nDev 76 50 95",
            "expected_output": "Dev 221"
          },
          {
            "input": "9\nAsha 31 13 99\nRiya 61 80 1\nNeha 16 70 79\nIsha 47 1 95\nKaran 81 90 25\nMohan 82 64 89\nTara 34 65 2\nVivek 11 91 7\nNina 91 32 75",
            "expected_output": "Mohan 235"
          },
          {
            "input": "6\nAsha 50 88 59\nRiya 13 83 48\nNeha 1 22 50\nIsha 53 54 76\nKaran 39 75 10\nMohan 8 67 16",
            "expected_output": "Asha 197"
          },
          {
            "input": "12\nAsha 95 32 85\nRiya 56 97 91\nNeha 68 37 27\nIsha 3 73 76\nKaran 35 65 21\nMohan 67 9 92\nTara 5 34 31\nVivek 89 92 96\nNina 56 73 36\nAman 16 34 21\nZoya 100 38 8\nDev 41 0 61",
            "expected_output": "Vivek 277"
          },
          {
            "input": "24\nAsha 100 100 100\nRiya 85 69 66\nNeha 8 89 45\nIsha 94 26 30\nKaran 31 45 51\nMohan 19 76 48\nTara 98 98 51\nVivek 77 21 38\nNina 42 11 21\nAman 63 18 19\nZoya 26 17 66\nDev 48 43 17\nAsha12 16 68 25\nRiya13 69 39 20\nNeha14 53 84 53\nIsha15 22 45 69\nKaran16 23 14 89\nMohan17 15 1 8\nTara18 44 21 2\nVivek19 74 44 83\nNina20 7 92 90\nAman21 45 12 77\nZoya22 90 59 75\nDev23 30 28 77",
            "expected_output": "Asha 300"
          },
          {
            "input": "11\nAsha 53 16 54\nRiya 82 88 76\nNeha 87 59 18\nIsha 56 32 75\nKaran 61 44 51\nMohan 5 6 4\nTara 95 64 21\nVivek 96 44 17\nNina 42 80 45\nAman 44 15 8\nZoya 86 34 63",
            "expected_output": "Riya 246"
          },
          {
            "input": "6\nAsha 67 29 50\nRiya 72 14 23\nNeha 84 31 45\nIsha 63 24 91\nKaran 42 31 32\nMohan 15 35 37",
            "expected_output": "Isha 178"
          },
          {
            "input": "23\nAsha 55 94 28\nRiya 18 38 43\nNeha 1 97 73\nIsha 2 10 26\nKaran 16 10 1\nMohan 58 97 45\nTara 64 55 47\nVivek 47 76 20\nNina 4 53 77\nAman 60 62 88\nZoya 69 73 71\nDev 93 34 37\nAsha12 36 48 15\nRiya13 61 34 0\nNeha14 28 29 16\nIsha15 5 43 16\nKaran16 52 7 78\nMohan17 86 76 53\nTara18 93 53 19\nVivek19 84 4 62\nNina20 81 37 14\nAman21 67 66 79\nZoya22 19 85 82",
            "expected_output": "Mohan17 215"
          },
          {
            "input": "27\nAsha 29 86 65\nRiya 10 28 14\nNeha 17 76 55\nIsha 92 100 62\nKaran 18 62 70\nMohan 47 84 39\nTara 98 52 33\nVivek 26 98 22\nNina 27 11 35\nAman 81 62 58\nZoya 83 39 3\nDev 14 47 53\nAsha12 50 71 76\nRiya13 93 33 96\nNeha14 78 25 16\nIsha15 92 37 10\nKaran16 25 56 10\nMohan17 61 0 63\nTara18 76 50 27\nVivek19 0 32 86\nNina20 3 39 20\nAman21 31 48 3\nZoya22 95 51 79\nDev23 83 47 91\nAsha24 51 64 25\nRiya25 56 8 53\nNeha26 94 96 14",
            "expected_output": "Isha 254"
          },
          {
            "input": "25\nAsha 79 4 70\nRiya 12 29 16\nNeha 87 96 71\nIsha 77 16 78\nKaran 38 40 33\nMohan 20 0 15\nTara 4 50 77\nVivek 81 58 28\nNina 71 37 41\nAman 56 77 11\nZoya 8 45 2\nDev 46 45 10\nAsha12 37 61 44\nRiya13 80 40 40\nNeha14 94 71 76\nIsha15 65 91 35\nKaran16 86 78 91\nMohan17 91 4 15\nTara18 86 8 36\nVivek19 65 90 89\nNina20 25 30 4\nAman21 86 89 98\nZoya22 30 10 42\nDev23 18 41 84\nAsha24 41 44 86",
            "expected_output": "Aman21 273"
          },
          {
            "input": "5\nAsha 50 50 50\nRiya 50 50 50\nNeha 50 50 50\nIsha 50 50 50\nKaran 50 50 50",
            "expected_output": "Asha 150"
          },
          {
            "input": "8\nAsha 73 19 32\nRiya 16 77 83\nNeha 76 77 55\nIsha 49 91 0\nKaran 22 94 1\nMohan 36 43 20\nTara 82 16 68\nVivek 32 67 39",
            "expected_output": "Neha 208"
          },
          {
            "input": "21\nAsha 79 93 23\nRiya 29 28 31\nNeha 82 6 76\nIsha 12 39 2\nKaran 17 42 58\nMohan 1 0 48\nTara 87 57 60\nVivek 20 63 57\nNina 75 47 19\nAman 74 47 44\nZoya 39 6 12\nDev 14 9 79\nAsha12 100 33 31\nRiya13 40 10 82\nNeha14 31 17 93\nIsha15 19 61 11\nKaran16 92 7 71\nMohan17 14 19 44\nTara18 91 40 33\nVivek19 28 53 59\nNina20 7 73 34",
            "expected_output": "Tara 204"
          },
          {
            "input": "2\nAsha 38 39 52\nRiya 69 63 19",
            "expected_output": "Riya 151"
          }
        ]
      },
      {
        "id": "set_common_ground",
        "title": "Common Ground",
        "category": "Set",
        "marks": 20,
        "statement": "Two lists represent people attending two events. Duplicate names inside either list count only once. Print three lines: the names attending both events, the names attending at least one event, and the names attending only the first event. Every line must be alphabetically sorted. Print EMPTY for an empty result.",
        "input_format": "The first line contains n and m. The second line contains n names. The third line contains m names. When a count is zero, that line is empty.",
        "output_format": "Three sorted, space-separated lines: intersection, union, first-only.",
        "constraints": "0 <= n,m <= 30; names contain lowercase letters only.",
        "examples": [
          {
            "input": "5 5\nalice bob bob dan eva\nbob carol eva eva frank",
            "output": "bob eva\nalice bob carol dan eva frank\nalice dan"
          },
          {
            "input": "2 2\na b\nc d",
            "output": "EMPTY\na b c d\na b"
          }
        ],
        "test_cases": [
          {
            "input": "17 15\nmia alice jane bob dan alice eva frank carol bob mia nora alice alice mia bob oliver\nian ian carol mia carol leo jane nora oliver bob carol nora bob frank mia",
            "expected_output": "bob carol frank jane mia nora oliver\nalice bob carol dan eva frank ian jane leo mia nora oliver\nalice dan eva"
          },
          {
            "input": "1 8\nian\nhari dan mia carol carol nora dan mia",
            "expected_output": "EMPTY\ncarol dan hari ian mia nora\nian"
          },
          {
            "input": "15 19\ndan ian dan nora jane kate nora dan ian alice ian oliver nora nora oliver\nnora bob leo eva gina ian hari carol bob jane ian gina frank gina nora alice mia nora jane",
            "expected_output": "alice ian jane nora\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\ndan kate oliver"
          },
          {
            "input": "9 19\nkate gina nora gina frank hari frank frank alice\nalice alice carol oliver kate nora leo leo leo oliver jane carol gina gina leo kate nora oliver bob",
            "expected_output": "alice gina kate nora\nalice bob carol frank gina hari jane kate leo nora oliver\nfrank hari"
          },
          {
            "input": "18 9\ngina alice bob alice mia kate kate kate frank frank bob kate frank dan nora ian eva frank\nbob gina oliver kate hari mia dan dan jane",
            "expected_output": "bob dan gina kate mia\nalice bob dan eva frank gina hari ian jane kate mia nora oliver\nalice eva frank ian nora"
          },
          {
            "input": "12 17\njane eva leo leo frank alice leo alice gina ian bob gina\nbob oliver mia carol kate nora eva gina eva oliver leo bob kate nora hari eva oliver",
            "expected_output": "bob eva gina leo\nalice bob carol eva frank gina hari ian jane kate leo mia nora oliver\nalice frank ian jane"
          },
          {
            "input": "13 17\nian nora hari carol gina nora eva oliver mia oliver frank leo alice\nkate bob eva mia oliver dan kate hari eva leo dan leo ian gina mia eva bob",
            "expected_output": "eva gina hari ian leo mia oliver\nalice bob carol dan eva frank gina hari ian kate leo mia nora oliver\nalice carol frank nora"
          },
          {
            "input": "24 28\nbob mia nora oliver ian nora mia carol ian ian eva alice kate hari kate bob carol ian ian gina leo eva frank mia\ngina oliver jane bob carol jane carol hari eva kate kate dan leo leo hari dan bob frank hari nora alice eva alice dan ian leo oliver mia",
            "expected_output": "alice bob carol eva frank gina hari ian kate leo mia nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nEMPTY"
          },
          {
            "input": "16 9\nnora ian dan ian ian dan jane frank alice oliver frank gina carol ian nora kate\neva oliver carol ian hari jane ian eva leo",
            "expected_output": "carol ian jane oliver\nalice carol dan eva frank gina hari ian jane kate leo nora oliver\nalice dan frank gina kate nora"
          },
          {
            "input": "20 5\nnora eva oliver frank hari alice carol jane carol jane carol jane gina carol gina dan ian carol dan carol\ncarol eva carol mia dan",
            "expected_output": "carol dan eva\nalice carol dan eva frank gina hari ian jane mia nora oliver\nalice frank gina hari ian jane nora oliver"
          },
          {
            "input": "4 16\ndan oliver jane eva\njane mia gina bob dan leo mia alice hari kate alice jane jane oliver hari eva",
            "expected_output": "dan eva jane oliver\nalice bob dan eva gina hari jane kate leo mia oliver\nEMPTY"
          },
          {
            "input": "18 13\nleo carol oliver carol alice bob jane dan gina oliver nora hari eva bob mia dan alice gina\noliver nora bob carol kate nora ian gina frank bob nora eva alice",
            "expected_output": "alice bob carol eva gina nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\ndan hari jane leo mia"
          },
          {
            "input": "15 4\ncarol jane oliver jane alice frank kate ian bob gina alice alice dan jane nora\neva oliver nora carol",
            "expected_output": "carol nora oliver\nalice bob carol dan eva frank gina ian jane kate nora oliver\nalice bob dan frank gina ian jane kate"
          },
          {
            "input": "18 10\nnora oliver gina mia kate leo dan jane ian dan kate carol ian dan nora mia dan leo\nnora frank nora bob ian carol jane carol frank carol",
            "expected_output": "carol ian jane nora\nbob carol dan frank gina ian jane kate leo mia nora oliver\ndan gina kate leo mia oliver"
          },
          {
            "input": "18 28\nfrank jane frank leo leo bob ian hari bob leo bob jane jane nora dan leo jane nora\nbob mia leo frank kate ian frank alice hari jane gina leo dan nora alice bob mia frank hari gina ian alice ian nora ian oliver mia oliver",
            "expected_output": "bob dan frank hari ian jane leo nora\nalice bob dan frank gina hari ian jane kate leo mia nora oliver\nEMPTY"
          },
          {
            "input": "11 12\noliver ian oliver alice jane jane oliver carol hari frank carol\noliver eva dan dan frank dan eva oliver carol leo kate oliver",
            "expected_output": "carol frank oliver\nalice carol dan eva frank hari ian jane kate leo oliver\nalice hari ian jane"
          },
          {
            "input": "15 15\noliver alice ian mia hari leo jane leo gina oliver leo dan alice bob kate\nkate eva bob ian eva nora jane jane alice oliver alice oliver bob mia hari",
            "expected_output": "alice bob hari ian jane kate mia oliver\nalice bob dan eva gina hari ian jane kate leo mia nora oliver\ndan gina leo"
          },
          {
            "input": "17 17\nalice ian bob nora mia leo kate leo oliver bob oliver mia nora hari gina dan hari\ngina frank bob hari nora kate mia alice nora hari kate oliver mia dan gina alice gina",
            "expected_output": "alice bob dan gina hari kate mia nora oliver\nalice bob dan frank gina hari ian kate leo mia nora oliver\nian leo"
          },
          {
            "input": "30 28\nfrank ian mia jane oliver eva carol mia bob nora dan kate dan ian leo mia alice oliver ian mia oliver hari gina mia nora leo alice kate dan ian\ngina carol kate nora gina gina dan ian oliver carol mia nora jane kate gina oliver dan oliver dan bob kate jane kate leo jane oliver eva leo",
            "expected_output": "bob carol dan eva gina ian jane kate leo mia nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nalice frank hari"
          },
          {
            "input": "18 16\nalice dan jane nora bob nora oliver nora jane eva alice ian nora dan oliver dan kate carol\nalice ian carol mia kate dan leo hari nora bob dan jane frank ian mia kate",
            "expected_output": "alice bob carol dan ian jane kate nora\nalice bob carol dan eva frank hari ian jane kate leo mia nora oliver\neva oliver"
          },
          {
            "input": "18 10\nfrank frank jane gina alice hari leo leo carol bob oliver eva mia hari dan eva dan leo\nian dan bob oliver carol jane ian carol ian hari",
            "expected_output": "bob carol dan hari jane oliver\nalice bob carol dan eva frank gina hari ian jane leo mia oliver\nalice eva frank gina leo mia"
          },
          {
            "input": "12 7\nbob ian gina frank ian carol frank leo nora mia gina frank\nkate oliver eva dan kate gina bob",
            "expected_output": "bob gina\nbob carol dan eva frank gina ian kate leo mia nora oliver\ncarol frank ian leo mia nora"
          },
          {
            "input": "8 13\nfrank bob eva nora oliver jane ian alice\nkate hari bob dan alice dan mia dan alice alice frank mia bob",
            "expected_output": "alice bob frank\nalice bob dan eva frank hari ian jane kate mia nora oliver\neva ian jane nora oliver"
          },
          {
            "input": "22 4\nian dan frank gina bob kate alice alice frank gina nora gina mia hari kate leo alice hari oliver kate alice jane\nleo hari leo kate",
            "expected_output": "hari kate leo\nalice bob dan frank gina hari ian jane kate leo mia nora oliver\nalice bob dan frank gina ian jane mia nora oliver"
          },
          {
            "input": "20 14\ngina nora nora nora alice dan dan mia gina hari dan oliver gina bob oliver nora leo alice kate nora\nkate bob frank dan eva jane kate ian alice gina hari kate hari dan",
            "expected_output": "alice bob dan gina hari kate\nalice bob dan eva frank gina hari ian jane kate leo mia nora oliver\nleo mia nora oliver"
          },
          {
            "input": "3 15\nalice mia gina\ndan dan carol hari jane nora jane ian leo ian ian frank dan jane dan",
            "expected_output": "EMPTY\nalice carol dan frank gina hari ian jane leo mia nora\nalice gina mia"
          },
          {
            "input": "25 14\nfrank nora bob carol gina frank hari gina hari oliver kate nora carol mia leo oliver ian frank hari ian carol ian hari carol kate\nkate alice hari ian frank mia bob jane nora hari carol nora dan eva",
            "expected_output": "bob carol frank hari ian kate mia nora\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\ngina leo oliver"
          },
          {
            "input": "2 16\ngina alice\njane nora jane frank alice carol frank ian oliver nora alice kate nora frank alice bob",
            "expected_output": "alice\nalice bob carol frank gina ian jane kate nora oliver\ngina"
          },
          {
            "input": "3 12\nian gina carol\ngina frank hari bob gina oliver dan gina bob carol leo leo",
            "expected_output": "carol gina\nbob carol dan frank gina hari ian leo oliver\nian"
          },
          {
            "input": "7 8\ngina dan carol mia eva gina alice\nbob frank gina alice kate kate kate hari",
            "expected_output": "alice gina\nalice bob carol dan eva frank gina hari kate mia\ncarol dan eva mia"
          },
          {
            "input": "14 19\nmia oliver frank dan eva kate leo leo frank hari ian nora leo hari\nnora jane eva bob gina bob dan hari hari nora mia carol dan kate mia hari gina oliver jane",
            "expected_output": "dan eva hari kate mia nora oliver\nbob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nfrank ian leo"
          },
          {
            "input": "20 3\nfrank bob gina oliver leo kate kate nora frank ian leo alice oliver gina alice leo leo oliver bob ian\njane dan frank",
            "expected_output": "frank\nalice bob dan frank gina ian jane kate leo nora oliver\nalice bob gina ian kate leo nora oliver"
          },
          {
            "input": "23 16\njane oliver eva dan eva frank ian frank gina hari ian kate leo dan dan ian gina frank leo hari carol bob frank\nbob eva oliver dan bob oliver hari ian bob eva ian leo eva alice nora bob",
            "expected_output": "bob dan eva hari ian leo oliver\nalice bob carol dan eva frank gina hari ian jane kate leo nora oliver\ncarol frank gina jane kate"
          },
          {
            "input": "16 10\ncarol carol ian dan jane mia ian dan jane oliver kate nora nora leo oliver leo\nian carol alice gina carol nora leo dan oliver gina",
            "expected_output": "carol dan ian leo nora oliver\nalice carol dan gina ian jane kate leo mia nora oliver\njane kate mia"
          },
          {
            "input": "0 19\n\nkate kate bob alice oliver leo oliver frank alice nora ian leo frank jane bob hari bob bob hari",
            "expected_output": "EMPTY\nalice bob frank hari ian jane kate leo nora oliver\nEMPTY"
          },
          {
            "input": "9 14\nnora oliver alice hari hari frank bob jane carol\nfrank frank gina hari ian gina ian bob eva nora carol oliver hari kate",
            "expected_output": "bob carol frank hari nora oliver\nalice bob carol eva frank gina hari ian jane kate nora oliver\nalice jane"
          },
          {
            "input": "0 14\n\noliver leo mia gina jane bob nora alice nora dan leo jane alice jane",
            "expected_output": "EMPTY\nalice bob dan gina jane leo mia nora oliver\nEMPTY"
          },
          {
            "input": "9 7\ncarol kate dan kate kate mia hari mia dan\nbob gina carol ian frank jane kate",
            "expected_output": "carol kate\nbob carol dan frank gina hari ian jane kate mia\ndan hari mia"
          },
          {
            "input": "18 2\nalice gina kate oliver oliver alice gina mia carol gina oliver frank gina kate jane eva jane ian\nnora jane",
            "expected_output": "jane\nalice carol eva frank gina ian jane kate mia nora oliver\nalice carol eva frank gina ian kate mia oliver"
          },
          {
            "input": "28 13\ndan jane jane ian oliver bob frank oliver nora mia dan bob bob dan kate nora dan leo mia frank jane frank dan leo leo carol bob ian\ncarol kate mia eva dan carol carol carol kate kate gina leo mia",
            "expected_output": "carol dan kate leo mia\nbob carol dan eva frank gina ian jane kate leo mia nora oliver\nbob frank ian jane nora oliver"
          },
          {
            "input": "3 10\ngina leo eva\nfrank leo hari frank bob dan jane carol alice bob",
            "expected_output": "leo\nalice bob carol dan eva frank gina hari jane leo\neva gina"
          },
          {
            "input": "24 25\ndan nora mia jane carol alice ian jane mia kate eva gina oliver leo alice bob bob alice kate hari gina carol gina dan\ngina jane oliver hari kate frank bob mia jane alice alice dan kate ian alice leo carol nora dan mia leo dan kate frank leo",
            "expected_output": "alice bob carol dan gina hari ian jane kate leo mia nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\neva"
          },
          {
            "input": "27 2\nhari eva hari ian eva jane dan alice oliver bob jane gina nora bob kate kate carol leo ian eva hari kate ian dan oliver carol eva\nbob gina",
            "expected_output": "bob gina\nalice bob carol dan eva gina hari ian jane kate leo nora oliver\nalice carol dan eva hari ian jane kate leo nora oliver"
          },
          {
            "input": "25 6\nhari hari mia nora ian carol mia bob kate eva frank gina eva leo alice oliver frank gina jane dan oliver frank nora bob gina\nleo ian eva jane jane gina",
            "expected_output": "eva gina ian jane leo\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nalice bob carol dan frank hari kate mia nora oliver"
          },
          {
            "input": "5 24\nbob nora kate mia alice\nkate carol oliver leo frank frank leo leo carol oliver jane gina nora hari alice ian carol ian mia kate gina eva frank mia",
            "expected_output": "alice kate mia nora\nalice bob carol eva frank gina hari ian jane kate leo mia nora oliver\nbob"
          },
          {
            "input": "7 4\nalice eva mia leo ian ian jane\nkate alice hari gina",
            "expected_output": "alice\nalice eva gina hari ian jane kate leo mia\neva ian jane leo mia"
          },
          {
            "input": "30 14\nbob jane dan oliver alice frank alice kate leo kate nora ian nora carol eva nora eva frank leo carol carol kate kate hari hari carol frank dan ian kate\nian jane mia alice dan leo leo oliver kate eva gina nora bob jane",
            "expected_output": "alice bob dan eva ian jane kate leo nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\ncarol frank hari"
          },
          {
            "input": "9 24\noliver alice dan alice dan dan kate hari carol\ngina carol kate bob eva nora bob oliver gina jane ian dan eva nora kate oliver mia dan dan oliver nora leo mia kate",
            "expected_output": "carol dan kate oliver\nalice bob carol dan eva gina hari ian jane kate leo mia nora oliver\nalice hari"
          },
          {
            "input": "18 22\nian carol oliver mia oliver carol mia kate bob leo mia kate jane carol hari mia hari jane\nfrank kate frank kate kate ian jane frank frank gina eva mia bob bob kate ian eva mia gina kate frank frank",
            "expected_output": "bob ian jane kate mia\nbob carol eva frank gina hari ian jane kate leo mia oliver\ncarol hari leo oliver"
          },
          {
            "input": "20 0\nkate bob eva leo eva bob oliver carol eva jane eva gina gina bob oliver jane alice kate jane bob\n",
            "expected_output": "EMPTY\nalice bob carol eva gina jane kate leo oliver\nalice bob carol eva gina jane kate leo oliver"
          },
          {
            "input": "24 2\nmia eva ian eva nora leo kate hari oliver jane ian nora gina hari bob jane carol carol frank hari nora hari leo nora\nian hari",
            "expected_output": "hari ian\nbob carol eva frank gina hari ian jane kate leo mia nora oliver\nbob carol eva frank gina jane kate leo mia nora oliver"
          },
          {
            "input": "6 29\nkate ian dan alice dan jane\nalice carol ian alice alice carol leo ian frank hari alice kate oliver bob mia jane oliver kate nora nora mia frank leo bob alice kate frank mia frank",
            "expected_output": "alice ian jane kate\nalice bob carol dan frank hari ian jane kate leo mia nora oliver\ndan"
          },
          {
            "input": "14 14\nmia frank gina ian mia kate alice bob bob kate jane jane alice leo\nnora hari bob gina mia frank dan hari kate kate gina alice ian gina",
            "expected_output": "alice bob frank gina ian kate mia\nalice bob dan frank gina hari ian jane kate leo mia nora\njane leo"
          },
          {
            "input": "23 13\noliver mia gina oliver frank mia ian kate oliver hari gina mia leo leo leo nora alice hari frank ian frank nora nora\nfrank mia gina nora frank carol carol bob dan oliver dan frank bob",
            "expected_output": "frank gina mia nora oliver\nalice bob carol dan frank gina hari ian kate leo mia nora oliver\nalice hari ian kate leo"
          },
          {
            "input": "13 29\ncarol nora hari ian kate jane gina hari alice hari alice oliver dan\nhari mia jane hari carol carol carol ian bob alice alice ian hari kate kate dan alice dan kate bob kate bob frank eva hari mia ian eva dan",
            "expected_output": "alice carol dan hari ian jane kate\nalice bob carol dan eva frank gina hari ian jane kate mia nora oliver\ngina nora oliver"
          },
          {
            "input": "27 7\nhari mia bob hari kate gina eva kate mia alice eva leo gina carol eva gina dan dan frank hari ian frank leo frank oliver hari dan\neva gina oliver carol mia hari leo",
            "expected_output": "carol eva gina hari leo mia oliver\nalice bob carol dan eva frank gina hari ian kate leo mia oliver\nalice bob dan frank ian kate"
          },
          {
            "input": "29 4\nbob oliver alice carol eva bob gina mia dan ian alice hari hari bob nora oliver dan leo frank frank gina nora carol oliver carol mia oliver bob carol\nfrank mia hari bob",
            "expected_output": "bob frank hari mia\nalice bob carol dan eva frank gina hari ian leo mia nora oliver\nalice carol dan eva gina ian leo nora oliver"
          },
          {
            "input": "18 12\nleo carol alice dan frank ian leo nora ian mia frank eva bob frank dan frank alice dan\nleo gina alice bob alice dan carol dan oliver jane carol leo",
            "expected_output": "alice bob carol dan leo\nalice bob carol dan eva frank gina ian jane leo mia nora oliver\neva frank ian mia nora"
          },
          {
            "input": "8 25\ngina kate jane mia bob kate dan frank\nleo frank nora carol ian ian jane nora dan ian ian mia leo frank carol mia kate leo alice ian hari bob frank oliver dan",
            "expected_output": "bob dan frank jane kate mia\nalice bob carol dan frank gina hari ian jane kate leo mia nora oliver\ngina"
          },
          {
            "input": "22 3\nalice jane alice eva gina gina carol leo hari carol mia nora dan mia nora alice carol mia carol gina carol hari\nhari alice frank",
            "expected_output": "alice hari\nalice carol dan eva frank gina hari jane leo mia nora\ncarol dan eva gina jane leo mia nora"
          },
          {
            "input": "22 14\ncarol mia leo leo ian jane kate carol eva eva dan oliver eva carol oliver frank leo eva dan jane kate oliver\njane dan mia frank nora dan frank kate hari mia dan kate nora leo",
            "expected_output": "dan frank jane kate leo mia\ncarol dan eva frank hari ian jane kate leo mia nora oliver\ncarol eva ian oliver"
          },
          {
            "input": "19 13\neva ian hari eva eva gina leo gina nora oliver nora eva alice gina leo bob alice alice eva\nian alice hari mia oliver dan jane frank kate eva dan jane nora",
            "expected_output": "alice eva hari ian nora oliver\nalice bob dan eva frank gina hari ian jane kate leo mia nora oliver\nbob gina leo"
          },
          {
            "input": "18 15\nmia ian mia hari bob eva alice jane alice mia eva kate ian kate oliver carol gina oliver\njane kate eva alice hari leo alice eva ian ian alice ian nora jane gina",
            "expected_output": "alice eva gina hari ian jane kate\nalice bob carol eva gina hari ian jane kate leo mia nora oliver\nbob carol mia oliver"
          },
          {
            "input": "26 12\nleo gina oliver leo dan frank alice ian nora mia gina dan bob carol leo oliver kate hari kate nora alice alice oliver nora oliver carol\nkate leo ian gina gina gina eva nora leo gina dan bob",
            "expected_output": "bob dan gina ian kate leo nora\nalice bob carol dan eva frank gina hari ian kate leo mia nora oliver\nalice carol frank hari mia oliver"
          },
          {
            "input": "22 22\nleo eva bob gina hari kate gina eva mia dan leo frank ian dan gina eva carol oliver gina hari eva mia\noliver kate gina carol nora leo frank mia dan ian leo mia carol frank oliver oliver alice gina hari dan jane frank",
            "expected_output": "carol dan frank gina hari ian kate leo mia oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nbob eva"
          },
          {
            "input": "28 20\nhari oliver nora ian carol oliver kate hari oliver carol jane gina hari carol oliver carol carol kate kate oliver carol frank dan gina nora oliver leo kate\nmia hari leo eva nora carol nora alice dan eva kate hari dan gina bob gina jane ian leo oliver",
            "expected_output": "carol dan gina hari ian jane kate leo nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nfrank"
          },
          {
            "input": "16 23\noliver nora kate hari nora mia hari kate leo hari ian frank ian nora dan eva\nalice hari mia dan ian jane oliver hari gina gina jane mia carol kate mia eva frank mia ian dan kate oliver eva",
            "expected_output": "dan eva frank hari ian kate mia oliver\nalice carol dan eva frank gina hari ian jane kate leo mia nora oliver\nleo nora"
          },
          {
            "input": "29 5\nian bob carol bob oliver alice hari jane jane kate eva oliver nora ian oliver jane eva bob alice hari ian oliver carol jane leo ian dan kate eva\nhari carol leo hari oliver",
            "expected_output": "carol hari leo oliver\nalice bob carol dan eva hari ian jane kate leo nora oliver\nalice bob dan eva ian jane kate nora"
          },
          {
            "input": "27 21\nbob frank carol carol dan kate eva dan gina frank jane leo eva eva bob mia carol hari mia eva nora mia mia jane hari gina kate\nleo ian ian nora ian mia nora eva bob nora bob leo nora leo dan leo dan frank dan ian dan",
            "expected_output": "bob dan eva frank leo mia nora\nbob carol dan eva frank gina hari ian jane kate leo mia nora\ncarol gina hari jane kate"
          },
          {
            "input": "15 18\nfrank leo mia frank mia kate hari dan frank mia kate eva nora ian mia\nkate leo hari dan jane nora carol alice mia ian kate kate gina bob ian eva alice nora",
            "expected_output": "dan eva hari ian kate leo mia nora\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora\nfrank"
          },
          {
            "input": "20 11\nmia hari dan eva hari nora gina bob mia ian nora mia frank oliver dan hari carol alice frank gina\nnora oliver oliver mia nora bob eva eva hari frank ian",
            "expected_output": "bob eva frank hari ian mia nora oliver\nalice bob carol dan eva frank gina hari ian mia nora oliver\nalice carol dan gina"
          },
          {
            "input": "23 10\nmia leo bob frank gina carol jane dan carol dan hari gina ian dan ian leo frank jane leo carol nora kate nora\nalice alice carol jane hari ian eva jane alice nora",
            "expected_output": "carol hari ian jane nora\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora\nbob dan frank gina kate leo mia"
          },
          {
            "input": "13 30\noliver gina leo ian leo oliver dan alice nora gina nora bob kate\nbob mia bob leo eva jane gina hari nora frank hari mia leo jane eva nora ian carol oliver hari leo carol leo ian eva oliver leo hari gina bob",
            "expected_output": "bob gina ian leo nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nalice dan kate"
          },
          {
            "input": "9 26\neva gina dan ian alice leo dan hari ian\ncarol frank mia nora nora eva jane gina carol bob frank alice dan kate carol hari hari kate mia carol leo bob kate frank gina hari",
            "expected_output": "alice dan eva gina hari leo\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora\nian"
          },
          {
            "input": "22 0\nnora kate bob carol frank jane eva ian gina bob eva ian jane jane eva alice jane alice jane oliver bob oliver\n",
            "expected_output": "EMPTY\nalice bob carol eva frank gina ian jane kate nora oliver\nalice bob carol eva frank gina ian jane kate nora oliver"
          },
          {
            "input": "26 27\nbob kate frank frank kate dan mia ian dan jane oliver carol gina oliver alice eva gina nora oliver mia oliver jane mia leo carol jane\nleo hari dan mia frank kate kate oliver ian kate dan dan jane mia nora nora nora nora bob hari jane gina alice alice dan frank carol",
            "expected_output": "alice bob carol dan frank gina ian jane kate leo mia nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\neva"
          },
          {
            "input": "10 8\nmia alice leo eva carol jane mia jane carol bob\nleo dan jane nora gina eva mia leo",
            "expected_output": "eva jane leo mia\nalice bob carol dan eva gina jane leo mia nora\nalice bob carol"
          },
          {
            "input": "3 14\neva alice alice\nfrank carol eva frank kate leo ian alice oliver kate jane kate hari nora",
            "expected_output": "alice eva\nalice carol eva frank hari ian jane kate leo nora oliver\nEMPTY"
          },
          {
            "input": "15 21\nleo oliver hari frank gina eva frank jane kate mia frank bob dan oliver ian\nfrank leo dan ian hari nora kate hari gina alice bob kate mia kate mia jane alice gina mia carol kate",
            "expected_output": "bob dan frank gina hari ian jane kate leo mia\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\neva oliver"
          },
          {
            "input": "2 15\njane nora\nmia bob kate alice bob hari oliver carol jane frank dan dan ian jane bob",
            "expected_output": "jane\nalice bob carol dan frank hari ian jane kate mia nora oliver\nnora"
          },
          {
            "input": "17 12\noliver eva frank jane jane nora oliver jane leo hari frank oliver dan carol ian mia ian\ndan jane jane kate bob kate kate oliver eva hari gina ian",
            "expected_output": "dan eva hari ian jane oliver\nbob carol dan eva frank gina hari ian jane kate leo mia nora oliver\ncarol frank leo mia nora"
          },
          {
            "input": "13 15\ndan mia nora hari kate mia gina dan gina eva hari eva dan\nmia carol oliver eva frank gina frank carol bob nora nora nora nora ian frank",
            "expected_output": "eva gina mia nora\nbob carol dan eva frank gina hari ian kate mia nora oliver\ndan hari kate"
          },
          {
            "input": "7 24\noliver bob eva bob nora mia ian\nfrank hari kate oliver frank kate bob frank jane jane kate bob eva hari ian dan mia alice nora dan eva leo gina leo",
            "expected_output": "bob eva ian mia nora oliver\nalice bob dan eva frank gina hari ian jane kate leo mia nora oliver\nEMPTY"
          },
          {
            "input": "29 2\nleo leo nora alice frank alice bob jane jane hari hari dan nora alice carol gina hari gina bob frank kate hari frank frank leo leo carol eva dan\nbob frank",
            "expected_output": "bob frank\nalice bob carol dan eva frank gina hari jane kate leo nora\nalice carol dan eva gina hari jane kate leo nora"
          },
          {
            "input": "0 18\n\ndan jane oliver alice eva bob kate bob jane ian eva eva frank dan mia carol carol oliver",
            "expected_output": "EMPTY\nalice bob carol dan eva frank ian jane kate mia oliver\nEMPTY"
          },
          {
            "input": "25 12\njane nora oliver jane alice frank hari oliver ian carol hari eva jane alice hari bob nora mia eva eva mia nora eva carol eva\nnora hari frank leo ian frank frank kate carol gina eva jane",
            "expected_output": "carol eva frank hari ian jane nora\nalice bob carol eva frank gina hari ian jane kate leo mia nora oliver\nalice bob mia oliver"
          },
          {
            "input": "10 19\nnora leo alice frank carol frank mia bob bob frank\nfrank nora bob gina bob gina mia nora alice alice frank dan leo dan bob hari oliver hari frank",
            "expected_output": "alice bob frank leo mia nora\nalice bob carol dan frank gina hari leo mia nora oliver\ncarol"
          },
          {
            "input": "8 10\ngina dan nora hari hari gina jane eva\ncarol kate ian bob frank hari ian alice mia leo",
            "expected_output": "hari\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora\ndan eva gina jane nora"
          },
          {
            "input": "13 1\nbob dan eva dan dan nora gina jane frank hari leo frank hari\nleo",
            "expected_output": "leo\nbob dan eva frank gina hari jane leo nora\nbob dan eva frank gina hari jane nora"
          },
          {
            "input": "10 26\ndan kate hari leo frank alice oliver bob hari bob\neva alice leo leo ian nora dan mia dan frank gina jane carol dan leo carol eva oliver dan hari nora mia nora mia ian oliver",
            "expected_output": "alice dan frank hari leo oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nbob kate"
          },
          {
            "input": "3 15\ndan ian gina\ngina frank hari bob mia leo hari alice hari gina gina oliver oliver frank nora",
            "expected_output": "gina\nalice bob dan frank gina hari ian leo mia nora oliver\ndan ian"
          },
          {
            "input": "28 8\nnora jane gina hari dan alice eva ian dan kate frank ian hari kate dan nora gina kate gina ian ian hari oliver kate alice hari gina dan\neva carol alice bob mia kate frank hari",
            "expected_output": "alice eva frank hari kate\nalice bob carol dan eva frank gina hari ian jane kate mia nora oliver\ndan gina ian jane nora oliver"
          },
          {
            "input": "30 12\ncarol frank frank eva gina oliver oliver dan dan mia ian frank ian mia jane nora oliver nora frank bob frank hari hari frank hari eva carol ian frank frank\nmia hari mia alice ian kate hari hari leo nora nora alice",
            "expected_output": "hari ian mia nora\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\nbob carol dan eva frank gina jane oliver"
          },
          {
            "input": "2 29\nbob mia\ncarol carol dan carol bob mia ian kate dan kate ian frank carol dan eva eva frank carol dan nora carol nora bob bob kate eva oliver dan dan",
            "expected_output": "bob mia\nbob carol dan eva frank ian kate mia nora oliver\nEMPTY"
          },
          {
            "input": "7 2\nian kate nora leo leo alice kate\nleo carol",
            "expected_output": "leo\nalice carol ian kate leo nora\nalice ian kate nora"
          },
          {
            "input": "29 19\nfrank dan mia ian jane leo eva jane hari eva kate jane eva bob nora gina leo jane frank leo carol ian carol alice carol oliver mia ian mia\ndan carol hari nora oliver carol dan jane oliver leo alice mia ian alice bob nora carol ian mia",
            "expected_output": "alice bob carol dan hari ian jane leo mia nora oliver\nalice bob carol dan eva frank gina hari ian jane kate leo mia nora oliver\neva frank gina kate"
          },
          {
            "input": "0 14\n\nhari leo dan hari mia hari alice kate eva jane bob eva alice gina",
            "expected_output": "EMPTY\nalice bob dan eva gina hari jane kate leo mia\nEMPTY"
          },
          {
            "input": "0 18\n\nbob jane ian alice bob ian leo jane mia eva alice gina dan bob carol dan dan gina",
            "expected_output": "EMPTY\nalice bob carol dan eva gina ian jane leo mia\nEMPTY"
          },
          {
            "input": "4 8\nfrank frank kate leo\neva jane jane dan dan oliver bob hari",
            "expected_output": "EMPTY\nbob dan eva frank hari jane kate leo oliver\nfrank kate leo"
          },
          {
            "input": "8 20\nian mia eva dan alice leo nora nora\noliver gina hari leo leo leo leo gina dan eva bob alice kate kate dan kate oliver leo carol nora",
            "expected_output": "alice dan eva leo nora\nalice bob carol dan eva gina hari ian kate leo mia nora oliver\nian mia"
          }
        ]
      },
      {
        "id": "string_transform",
        "title": "String Transformer",
        "category": "String",
        "marks": 20,
        "statement": "Given a line of text, normalize it by removing leading/trailing whitespace and replacing every run of whitespace between words with a single space. Then reverse every word individually while keeping the order of the words unchanged. Print the transformed sentence. If there are no words, print EMPTY.",
        "input_format": "One line containing a sentence. It may contain letters, digits, punctuation, and spaces.",
        "output_format": "The normalized sentence with every word reversed, or EMPTY.",
        "constraints": "The line length is at most 200 characters.",
        "examples": [
          {
            "input": "   hello   python world  ",
            "output": "olleh nohtyp dlrow"
          },
          {
            "input": "Python 3 is fun!",
            "output": "nohtyP 3 si !nuf"
          }
        ],
        "test_cases": [
          {
            "input": "hello python world",
            "expected_output": "olleh nohtyp dlrow"
          },
          {
            "input": "   hello   python world  ",
            "expected_output": "olleh nohtyp dlrow"
          },
          {
            "input": "Python 3 is fun!",
            "expected_output": "nohtyP 3 si !nuf"
          },
          {
            "input": "a",
            "expected_output": "a"
          },
          {
            "input": "   ",
            "expected_output": "EMPTY"
          },
          {
            "input": "one  two   three",
            "expected_output": "eno owt eerht"
          },
          {
            "input": "Hello, World!",
            "expected_output": ",olleH !dlroW"
          },
          {
            "input": "123 abc 456",
            "expected_output": "321 cba 654"
          },
          {
            "input": "a-b c_d",
            "expected_output": "b-a d_c"
          },
          {
            "input": "  leading and trailing  ",
            "expected_output": "gnidael dna gniliart"
          },
          {
            "input": "     ZX.YX-aY0Z bacZ.X. X,0.a _,,.Z a11?Z.!- X2, _. _0b1.X.-?2 c?0_,Y_?  ",
            "expected_output": "Z0Ya-XY.XZ .X.Zcab a.0,X Z.,,_ -!.Z?11a ,2X ._ 2?-.X.1b0_ ?_Y,_0?c"
          },
          {
            "input": "   122,aXb_a-    Zb!    c.    2    ,1-2aa-ZX    ",
            "expected_output": "-a_bXa,221 !bZ .c 2 XZ-aa2-1,"
          },
          {
            "input": "    !.c 0bZ ?Y!-?20Yc, ?2Zb2X1bbX Z c!a c,a?Y02!2 X",
            "expected_output": "c.! Zb0 ,cY02?-!Y? Xbb1X2bZ2? Z a!c 2!20Y?a,c X"
          },
          {
            "input": "   _,Y ",
            "expected_output": "Y,_"
          },
          {
            "input": " __0X!1.2b, 1-?2X_0 1!_ 0aX!Z ,-X20 ?Y0.._c ",
            "expected_output": ",b2.1!X0__ 0_X2?-1 _!1 Z!Xa0 02X-, c_..0Y?"
          },
          {
            "input": "   _c_-X-?   10?bY-!X   a-1,YX0   0   a1!?b!?   ___Z-   .-21cb_-   ?-_.aXc,   Yb-X!b2 ",
            "expected_output": "?-X-_c_ X!-Yb?01 0XY,1-a 0 ?!b?!1a -Z___ -_bc12-. ,cXa._-? 2b!X-bY"
          },
          {
            "input": "    X22YX,-Y? cacY!b,Z.Z ",
            "expected_output": "?Y-,XY22X Z.Z,b!Ycac"
          },
          {
            "input": "    Za0,X?",
            "expected_output": "?X,0aZ"
          },
          {
            "input": "a1ca ,2-!-ZX_, Zc-Y0 ca!ZZ1-0 c0-,a a1ZaY.Y2aZ ? Z- c?b0 1Y-YZ11,XZ Xbc!Z.b0 --b  ",
            "expected_output": "ac1a ,_XZ-!-2, 0Y-cZ 0-1ZZ!ac a,-0c Za2Y.YaZ1a ? -Z 0b?c ZX,11ZY-Y1 0b.Z!cbX b--"
          },
          {
            "input": "a--Y_    .0,X2XcXY   ",
            "expected_output": "_Y--a YXcX2X,0."
          },
          {
            "input": "..     _Y.?!Y!!     _-X     ?1-12XY_    ",
            "expected_output": ".. !!Y!?.Y_ X-_ _YX21-1?"
          },
          {
            "input": "   ._,c!Xbb  Xa?bX  !.  0,c,_Z.bb  20-.Z-Z  _X!  2Y.0Y!Xa?  .Z0a0.Y..?  -  ca  ",
            "expected_output": "bbX!c,_. Xb?aX .! bb.Z_,c,0 Z-Z.-02 !X_ ?aX!Y0.Y2 ?..Y.0a0Z. - ac"
          },
          {
            "input": " ?1b?.     ?XaZ2a   ",
            "expected_output": ".?b1? a2ZaX?"
          },
          {
            "input": "    ?.1XXX     !aZ2,a!2     Yc     b-_2-!_!?     cZ220Zb20     Z-2     YX_.     c,--Z     bZ.?Zc,0-     0-.,0-,0     X?_Y!X?c ",
            "expected_output": "XXX1.? 2!a,2Za! cY ?!_!-2_-b 02bZ022Zc 2-Z ._XY Z--,c -0,cZ?.Zb 0,-0,.-0 c?X!Y_?X"
          },
          {
            "input": "    1Yc-bb    aX    .!-Y0cZ,-    !bc!    c.Xa!X2c    ??1-b?2!    ,0XZ..,ZY,",
            "expected_output": "bb-cY1 Xa -,Zc0Y-!. !cb! c2X!aX.c !2?b-1?? ,YZ,..ZX0,"
          },
          {
            "input": " -a1?0? Y!?c.X1 -!Y!-b  ",
            "expected_output": "?0?1a- 1X.c?!Y b-!Y!-"
          },
          {
            "input": " .!c   1_-110b0,-   cbc!X!    ",
            "expected_output": "c!. -,0b011-_1 !X!cbc"
          },
          {
            "input": " ?110 ,cY,_ X b2b Z ,2bbZ -?Z-   ",
            "expected_output": "011? _,Yc, X b2b Z Zbb2, -Z?-"
          },
          {
            "input": "     a!_,,,,?1 -Y_1b 0 ba0 .bbaZacY?Y  ",
            "expected_output": "1?,,,,_!a b1_Y- 0 0ab Y?YcaZabb."
          },
          {
            "input": "    01_-   ZbZa-   ,02.Xb_   !-X20-!c   ?   ac!-,,.Yc?   ,Z_bXZ",
            "expected_output": "-_10 -aZbZ _bX.20, c!-02X-! ? ?cY.,,-!ca ZXb_Z,"
          },
          {
            "input": "   ?aa!b-,c XY01Y!-_Y 2?.01 . 2,Z?0 Xab2a1c0 bYYY2c?0YZ X_ 0_?b. _a1Z-aX1 ",
            "expected_output": "c,-b!aa? Y_-!Y10YX 10.?2 . 0?Z,2 0c1a2baX ZY0?c2YYYb _X .b?_0 1Xa-Z1a_"
          },
          {
            "input": "   _b! Z cZ-X Zc2aZc!a -,??_c .!c1,__Y2X ?_a b1X - 1XY.,1-   ",
            "expected_output": "!b_ Z X-Zc a!cZa2cZ c_??,- X2Y__,1c!. a_? X1b - -1,.YX1"
          },
          {
            "input": " X?!ac_ -aaZ.-2a bY-_X, ?c- ,Zc.bZ-,c2 !,2-a _b0?X.Z0b -_c_ X_acc  ",
            "expected_output": "_ca!?X a2-.Zaa- ,X_-Yb -c? 2c,-Zb.cZ, a-2,! b0Z.X?0b_ _c_- cca_X"
          },
          {
            "input": "  b,bXa.!YXa     _c2     aXXa?Z?2",
            "expected_output": "aXY!.aXb,b 2c_ 2?Z?aXXa"
          },
          {
            "input": "   1Y20Y_ X_Y!c12X_b ._??c X.2!-b-XXa 2!,-!_.Z aa__?1Y bc   ",
            "expected_output": "_Y02Y1 b_X21c!Y_X c??_. aXX-b-!2.X Z._!-,!2 Y1?__aa cb"
          },
          {
            "input": "    ,02_b.-a   a-a2a   .b.   -X0Y,?cZ?Z   ,Z,_bZYZ   !XZcba.,X   bZZZ,1-    ",
            "expected_output": "a-.b_20, a2a-a .b. Z?Zc?,Y0X- ZYZb_,Z, X,.abcZX! -1,ZZZb"
          },
          {
            "input": "__1 _cZ.- _1_ ?Y-YYXc0b! ,Xb!1_!- X1a!Y? aX?.c112, -_a. Xc-?bY  ",
            "expected_output": "1__ -.Zc_ _1_ !b0cXYY-Y? -!_1!bX, ?Y!a1X ,211c.?Xa .a_- Yb?-cX"
          },
          {
            "input": " !!cY   Z!-   -.   0,_1_   !!10-_   1Y_a!2,2   !",
            "expected_output": "Yc!! -!Z .- _1_,0 _-01!! 2,2!a_Y1 !"
          },
          {
            "input": "    1?1b 0a 2c b_.Y0, 10 -   ",
            "expected_output": "b1?1 a0 c2 ,0Y._b 01 -"
          },
          {
            "input": "    !b0b!   b1cX2Z_2cZ   -Y!.,!,!.   ,c_-0aZ   1a_-   b!_Z_",
            "expected_output": "!b0b! Zc2_Z2Xc1b .!,!,.!Y- Za0-_c, -_a1 _Z_!b"
          },
          {
            "input": "  bZ!c1cb- ba02,?bY2 - c-Y_.Ya1cc b,c1aaY, _YY1Xb0,  ",
            "expected_output": "-bc1c!Zb 2Yb?,20ab - cc1aY._Y-c ,Yaa1c,b ,0bX1YY_"
          },
          {
            "input": "   ZZbcc0!!b ZYZa02.!. -!?,21! 2a2 ?,XZb-.YZ ",
            "expected_output": "b!!0ccbZZ .!.20aZYZ !12,?!- 2a2 ZY.-bZX,?"
          },
          {
            "input": "   Zcc  bYc  _!XXb  --ZXZ?--  YZ  01Z,.-_Y    ",
            "expected_output": "ccZ cYb bXX!_ --?ZXZ-- ZY Y_-.,Z10"
          },
          {
            "input": "   .2_Y.     2!     aZY1200     .,     c2",
            "expected_output": ".Y_2. !2 0021YZa ,. 2c"
          },
          {
            "input": "    !0,Z2  aX  bZbZ2  b0?b  Zb._Xb  02?  .aX-  ,Z0Z_2  !X1?_-!Z1a   ",
            "expected_output": "2Z,0! Xa 2ZbZb b?0b bX_.bZ ?20 -Xa. 2_Z0Z, a1Z!-_?1X!"
          },
          {
            "input": "  cY?cc0,2. a-1-.b-1 Y??bc- - ?   ",
            "expected_output": ".2,0cc?Yc 1-b.-1-a -cb??Y - ?"
          },
          {
            "input": "YZcX?   Z0.   X!b0   cb??   ZX020   _-Y?!?YYX!   ,!.,0?1,   c,.a   c   ",
            "expected_output": "?XcZY .0Z 0b!X ??bc 020XZ !XYY?!?Y-_ ,1?0,.!, a.,c c"
          },
          {
            "input": " ,0?,?     ",
            "expected_output": "?,?0,"
          },
          {
            "input": " X2_-?cXY     _?21!2bb     -     .     b     Z_.bYXcZZa  ",
            "expected_output": "YXc?-_2X bb2!12?_ - . b aZZcXYb._Z"
          },
          {
            "input": "  cZaa.a-- ,-?XbbaY,b b_ bXa_ 0. a. 2- ,!0! ??2Y?X10 c. 1. Z2XZXZ2Z ",
            "expected_output": "--a.aaZc b,YabbX?-, _b _aXb .0 .a -2 !0!, 01X?Y2?? .c .1 Z2ZXZX2Z"
          },
          {
            "input": "  2-0b,?c  _.2X!1!!!c  b10Z  XY2    ",
            "expected_output": "c?,b0-2 c!!!1!X2._ Z01b 2YX"
          },
          {
            "input": "  1?1a     1!.?,     .,!     _?     .ab_!     1Za.aX2a?!     ccb,,.   ",
            "expected_output": "a1?1 ,?.!1 !,. ?_ !_ba. !?a2Xa.aZ1 .,,bcc"
          },
          {
            "input": "    ZX-Y_2X   ?,.aZXb   !!   1b__0X   Y!?2X_c   2?1ZXX_",
            "expected_output": "X2_Y-XZ bXZa.,? !! X0__b1 c_X2?!Y _XXZ1?2"
          },
          {
            "input": "    YX.ba,a    ca.    Zb?1c    _0_    0aZ2.    2bZYZ0!    -ZZX21c1    ._a11    b212YYZ    aa?    !Ya_cZ    b1,X    ",
            "expected_output": "a,ab.XY .ac c1?bZ _0_ .2Za0 !0ZYZb2 1c12XZZ- 11a_. ZYY212b ?aa Zc_aY! X,1b"
          },
          {
            "input": "011,  Y.a_bY.c.0  b??!cXcXZ  -  ,Zb.,!_0-a  ?1?c!YX  bc0!Yb1!X  ?X!  Z-Y?!c-_  11b,!X  1__Y  X_Y._  ",
            "expected_output": ",110 0.c.Yb_a.Y ZXcXc!??b - a-0_!,.bZ, XY!c?1? X!1bY!0cb !X? _-c!?Y-Z X!,b11 Y__1 _.Y_X"
          },
          {
            "input": "   aac?Y0c?X2",
            "expected_output": "2X?c0Y?caa"
          },
          {
            "input": "   2_Y.X1     ",
            "expected_output": "1X.Y_2"
          },
          {
            "input": "    Z02.Y1a,c    bY.Y    Yc?1.    cY.._1,,    Z__    X21,b?2c!Z    Xab?Y_,21b    2    Z0bc11,?.b    _211Yba.?? ",
            "expected_output": "c,a1Y.20Z Y.Yb .1?cY ,,1_..Yc __Z Z!c2?b,12X b12,_Y?baX 2 b.?,11cb0Z ??.abY112_"
          },
          {
            "input": "   X    2bbb_aa_    ",
            "expected_output": "X _aa_bbb2"
          },
          {
            "input": "__cb?0.-a-    2    !Z2Y,    _?b!aZX?1b    ..?X-bb-    aX0bb    !Y  ",
            "expected_output": "-a-.0?bc__ 2 ,Y2Z! b1?XZa!b?_ -bb-X?.. bb0Xa Y!"
          },
          {
            "input": "a2b0   -_!a   12_YY   ac1ZZ!-cc,   a!c.!??.0a ",
            "expected_output": "0b2a a!_- YY_21 ,cc-!ZZ1ca a0.??!.c!a"
          },
          {
            "input": "   ?b    Z!2X!,0  ",
            "expected_output": "b? 0,!X2!Z"
          },
          {
            "input": " X Z1Z. b1,,1?,c X,? c_,.1?b_Z2 . 1b?Y.c02- 0Y_ Y?._Z1X?- Z !2 !Z!220a0   ",
            "expected_output": "X .Z1Z c,?1,,1b ?,X 2Z_b?1.,_c . -20c.Y?b1 _Y0 -?X1Z_.?Y Z 2! 0a022!Z!"
          },
          {
            "input": "  0 ?021cc._! 1X!cX_1-, Ya?  ",
            "expected_output": "0 !_.cc120? ,-1_Xc!X1 ?aY"
          },
          {
            "input": "?Xba   cZ2-.X,Y   bZZ-_-Y-X_   ?.?0ab   _   Z   Yb1.!c.1-   Z_",
            "expected_output": "abX? Y,X.-2Zc _X-Y-_-ZZb ba0?.? _ Z -1.c!.1bY _Z"
          },
          {
            "input": "    .-,1 Y_Z!?_Za2 a-1.XZ c_     ",
            "expected_output": "1,-. 2aZ_?!Z_Y ZX.1-a _c"
          },
          {
            "input": " !,Zc1aZa0- 1Z _ZY0.Y?.b a,abZ.Y ? _.X01b _ ?",
            "expected_output": "-0aZa1cZ,! Z1 b.?Y.0YZ_ Y.Zba,a ? b10X._ _ ?"
          },
          {
            "input": "1Xb,.0X0Y ,0a1 YY0__?1 !a2Y_X2Xab ?1Y X2_a,?XX Yc bb_-.bcaX_ YbZZZ2b1?Y !02 !__!?ba..! Z,, ",
            "expected_output": "Y0X0.,bX1 1a0, 1?__0YY baX2X_Y2a! Y1? XX?,a_2X cY _Xacb.-_bb Y?1b2ZZZbY 20! !..ab?!__! ,,Z"
          },
          {
            "input": "-bXX !2! cX0-_cXa,X b 12?cb !-0!.0?! _b     ",
            "expected_output": "XXb- !2! X,aXc_-0Xc b bc?21 !?0.!0-! b_"
          },
          {
            "input": "    ?0,cY!1.Y X_ !,,b12..1? .02!?b0-Y2 .Z_cX?.  ",
            "expected_output": "Y.1!Yc,0? _X ?1..21b,,! 2Y-0b?!20. .?Xc_Z."
          },
          {
            "input": " ,,b201cZ2   cc..   ?Yab?X   2   Y01Z?c?   ,XYZY_   Y0.Y   _X_b!b,,Y1   ?.cZ_?1 ",
            "expected_output": "2Zc102b,, ..cc X?baY? 2 ?c?Z10Y _YZYX, Y.0Y 1Y,,b!b_X_ 1?_Zc.?"
          },
          {
            "input": " -21! c     ",
            "expected_output": "!12- c"
          },
          {
            "input": "   ,b,c     1Y2!?     Xb!0",
            "expected_output": "c,b, ?!2Y1 0!bX"
          },
          {
            "input": ",,1?aX a?22 Z b -Z  ",
            "expected_output": "Xa?1,, 22?a Z b Z-"
          },
          {
            "input": "    XbY1YX! X2Z2??X     ",
            "expected_output": "!XY1YbX X??2Z2X"
          },
          {
            "input": "YY-,X,Xc   11Y,Z10   bY2Y1!02   Z_?Yab22Z   !c.   cc-?Y!!cc,   2Y112   bca_   _a   bX?.   _,021?b   Y?   ",
            "expected_output": "cX,X,-YY 01Z,Y11 20!1Y2Yb Z22baY?_Z .c! ,cc!!Y?-cc 211Y2 _acb a_ .?Xb b?120,_ ?Y"
          },
          {
            "input": ",0c?  ",
            "expected_output": "?c0,"
          },
          {
            "input": "Y0a ba- 2,c Y_,20201X c_X 1!c ?-0 2,1_ca2c",
            "expected_output": "a0Y -ab c,2 X10202,_Y X_c c!1 0-? c2ac_1,2"
          },
          {
            "input": "     0 0Y0Z_-.0 _?_1?1 X1_?,-2 b2 !a .--!c?, 1X 2,.    ",
            "expected_output": "0 0.-_Z0Y0 1?1_?_ 2-,?_1X 2b a! ,?c!--. X1 .,2"
          },
          {
            "input": "   !._?a.2ca!   ,b,c   1Yb1-10   2   cc?_1,   11Z-a   !a1Zb- ",
            "expected_output": "!ac2.a?_.! c,b, 01-1bY1 2 ,1_?cc a-Z11 -bZ1a!"
          },
          {
            "input": "_    bXa?Y    X    1acY.    !ZZ_?02!ZX    !YY.Y12aX    !b!1    -Y2?X?    -   ",
            "expected_output": "_ Y?aXb X .Yca1 XZ!20?_ZZ! Xa21Y.YY! 1!b! ?X?2Y- -"
          },
          {
            "input": "    XYc2! c0c-?b2Z, -._ YX?.c1??- 1 X- 1Z1cZ2     ",
            "expected_output": "!2cYX ,Z2b?-c0c _.- -??1c.?XY 1 -X 2Zc1Z1"
          },
          {
            "input": "  _?b.c,!c  X2-,  ,  Zb211_..  Za_.",
            "expected_output": "c!,c.b?_ ,-2X , .._112bZ ._aZ"
          },
          {
            "input": "    Z1-Z-2c   -_20   _.c1   cZ   !2b   ?b_-,?-!   YXa?a0c   1_Z-2?   Y_-ac?a_,1   ,Za10a0b.   a   Zba",
            "expected_output": "c2-Z-1Z 02_- 1c._ Zc b2! !-?,-_b? c0a?aXY ?2-Z_1 1,_a?ca-_Y .b0a01aZ, a abZ"
          },
          {
            "input": "    1 ?Z_!b2 _-2c1c b1c1.1 ",
            "expected_output": "1 2b!_Z? c1c2-_ 1.1c1b"
          },
          {
            "input": " a   aY0?Z-1?   bX_   c   Yb   1   1_ccY,11   2-?c   ?Xca-   _Z.-   .c2aXa ",
            "expected_output": "a ?1-Z?0Ya _Xb c bY 1 11,Ycc_1 c?-2 -acX? -.Z_ aXa2c."
          },
          {
            "input": "0020_Y-_ ?,!11-   ",
            "expected_output": "_-Y_0200 -11!,?"
          },
          {
            "input": "  0c !cb?1 Y 1???0!ZZ, ",
            "expected_output": "c0 1?bc! Y ,ZZ!0???1"
          },
          {
            "input": " X0!X_ 2b_! 20?Z?cY_    ",
            "expected_output": "_X!0X !_b2 _Yc?Z?02"
          },
          {
            "input": "    .Zc_!_X!Z  -2  aYcb1.  Y2  -aa-?!Z!20  Y,!_,0 ",
            "expected_output": "Z!X_!_cZ. 2- .1bcYa 2Y 02!Z!?-aa- 0,_!,Y"
          },
          {
            "input": "     a10Y0a cZc. 0a.,1 !-2_ ?ZZ20bc0, !2_ Y, ?Z ?X_!c?c?, .?a2_ ba2X!Z.!2- Y0a_cc?c?Y  ",
            "expected_output": "a0Y01a .cZc 1,.a0 _2-! ,0cb02ZZ? _2! ,Y Z? ,?c?c!_X? _2a?. -2!.Z!X2ab Y?c?cc_a0Y"
          },
          {
            "input": "     0?_0X?- Z21?-,!Z1 Zc21c YZaXb0_1,1 Z.1c, ,.1.Zb  ",
            "expected_output": "-?X0_?0 1Z!,-?12Z c12cZ 1,1_0bXaZY ,c1.Z bZ.1.,"
          },
          {
            "input": " c    ?!1a    Y!.Z?a2    b0    _Y1_,,-X   ",
            "expected_output": "c a1!? 2a?Z.!Y 0b X-,,_1Y_"
          },
          {
            "input": " ._b  c  2,!0  Y1b1X  2-  .?b  ,  1_-ab1  a  Y  _b?,c?c,  -,Y-",
            "expected_output": "b_. c 0!,2 X1b1Y -2 b?. , 1ba-_1 a Y ,c?c,?b_ -Y,-"
          },
          {
            "input": " Y2-c1 c-Y. 02c00b 2 X_.cb1_?!Y ..,Y-00cZ1 Xaa0,02b. a,!0Y,b1X _2a0 ?0YZ0-    ",
            "expected_output": "1c-2Y .Y-c b00c20 2 Y!?_1bc._X 1Zc00-Y,.. .b20,0aaX X1b,Y0!,a 0a2_ -0ZY0?"
          },
          {
            "input": "X     aZa,a     Ya     a2a0_-,_.,     ?Ya0ZX0.     .02c0ZYX     0     ?a_?!  ",
            "expected_output": "X a,aZa aY ,._,-_0a2a .0XZ0aY? XYZ0c20. 0 !?_a?"
          },
          {
            "input": "    Xb ,XaZ.0!Z-0",
            "expected_output": "bX 0-Z!0.ZaX,"
          },
          {
            "input": "     - a. aaYZ- !X! _a,b0 !Z ,1a-?_c01Z bZ-!.?Z     ",
            "expected_output": "- .a -ZYaa !X! 0b,a_ Z! Z10c_?-a1, Z?.!-Zb"
          },
          {
            "input": "    Z,!?- 2..aa  ",
            "expected_output": "-?!,Z aa..2"
          },
          {
            "input": "Y01,,a-_2,     bY.X.-0!     1?Z1!2_     -Y22_YX1!,     _cc0-aYZ?     c1-     1.X0_1,c!     X1a_a?     ?!1c,.     Z     ,.     ,caa2?c1?",
            "expected_output": ",2_-a,,10Y !0-.X.Yb _2!1Z?1 ,!1XY_22Y- ?ZYa-0cc_ -1c !c,1_0X.1 ?a_a1X .,c1!? Z ., ?1c?2aac,"
          }
        ]
      },
      {
        "id": "dictionary_inventory",
        "title": "Inventory Master",
        "category": "Dictionary",
        "marks": 20,
        "statement": "A shop starts with quantities for several products. You are then given update operations that add or subtract stock. A product not present initially starts at 0 when it first appears in an update. After all updates, print the product with the largest quantity and that quantity. If several products tie, choose the product whose name is alphabetically smallest.",
        "input_format": "The first line contains n and q. The next n lines contain product quantity. The next q lines contain product delta.",
        "output_format": "Print: product quantity",
        "constraints": "0 <= n <= 20, 1 <= q <= 40; product names are lowercase letters; quantities/deltas are integers.",
        "examples": [
          {
            "input": "3 4\napple 10\nbanana 8\nmango 5\nbanana 5\napple -2\npear 20\nmango 10",
            "output": "pear 20"
          },
          {
            "input": "2 2\napple 5\nbanana 5\napple 2\nbanana 2",
            "output": "apple 7"
          }
        ],
        "test_cases": [
          {
            "input": "15 40\nhoney 7\ngrapes -2\njuice 36\napple 40\napple -2\ndates 17\nmango 12\nbanana 4\nflour 40\nbanana 12\ndates 5\napple 50\nmango 2\nhoney -8\ncarrot 13\ngrapes 12\nhoney -19\neggs -14\njuice 7\ncarrot 26\nflour 22\nflour 5\ngrapes 3\nflour -15\nmango -15\nmelon -3\nbanana 23\ncarrot 1\nbanana -19\nmango -19\napple -7\ncarrot -15\nmelon 20\neggs -3\nhoney -12\nmango 20\nmango -16\ncarrot -5\neggs 12\neggs 20\ncarrot 28\napple 15\nbanana 27\nkiwi 9\nmelon 18\njuice 22\ncarrot -4\njuice -19\nkiwi 28\neggs -13\nbanana 27\nkiwi -7\nkiwi -18\ncarrot -17\ncarrot 3",
            "expected_output": "banana 70"
          },
          {
            "input": "18 35\nhoney 23\nmango -9\napple 2\nbanana -8\ncarrot 40\njuice 7\ncarrot 10\nmango 5\nhoney 20\ndates 18\neggs 13\ngrapes -4\ngrapes 24\njuice 42\nmango 9\ncarrot 46\nflour 8\nhoney 19\ncarrot 22\nbanana -4\ngrapes -11\nhoney 6\nmango -9\neggs 20\ngrapes -10\neggs -20\ncarrot 15\napple 0\nmango 23\npear 9\nkiwi 26\nbanana 28\nkiwi -2\nhoney 2\njuice 30\ndates 17\nhoney 13\nbanana 9\nmango 18\neggs -19\neggs 17\ndates 19\nmelon 15\napple -11\nmelon 5\nkiwi 24\napple 29\nflour -2\neggs 1\npear -9\nbanana -17\nmango 25\neggs 21",
            "expected_output": "carrot 83"
          },
          {
            "input": "14 31\ndates 43\napple 46\nflour 44\nflour 28\nmango -3\ncarrot 25\nflour 6\njuice -3\nmango 20\ngrapes -7\napple 25\napple 31\nmango 33\napple 13\nflour 16\napple 11\ngrapes -12\ngrapes -17\nmelon -5\nbanana 17\npear -8\npear 20\nmango 14\nmango 14\nhoney 23\njuice 3\npear 28\napple -11\nflour -12\napple 29\nkiwi -15\napple -9\nflour 5\nmango 13\npear 3\npear 4\neggs -16\nbanana 25\nflour -1\nbanana -9\nkiwi 2\nhoney 13\nbanana -14\nmango 7\ndates 17",
            "expected_output": "mango 81"
          },
          {
            "input": "15 18\ndates 38\nflour 7\napple 20\neggs -5\neggs 41\nflour 28\nmango 22\ndates 8\napple 28\nflour 17\napple 14\ndates -7\nbanana 21\napple 15\neggs 11\nmango -7\ndates 3\ndates 24\nmango 17\nflour 0\njuice 12\nbanana -4\njuice 19\njuice -9\napple 26\npear 9\nmango -20\ncarrot 21\ndates -1\njuice -18\njuice 27\nkiwi 9\ndates 26",
            "expected_output": "dates 45"
          },
          {
            "input": "5 36\nmango 43\nhoney 11\neggs 47\ngrapes -6\napple 44\njuice -15\neggs 12\ncarrot -14\nbanana -6\neggs -12\nmelon 8\ncarrot -2\ndates -10\napple -16\njuice 27\njuice 28\nmango 15\neggs 25\nflour -20\neggs -3\nflour 3\nflour 23\njuice 8\ndates 14\nflour 6\nflour -4\nhoney -1\nhoney 22\nhoney -9\nbanana -2\nbanana 6\ngrapes -10\nflour -11\ndates 4\npear 30\njuice -8\ndates 7\nmango 20\ncarrot 23\njuice 24\npear -5",
            "expected_output": "mango 78"
          },
          {
            "input": "15 16\ndates 25\neggs 12\neggs -2\napple 29\nhoney 44\nbanana 34\napple -4\nhoney 29\njuice 36\napple -5\nmango 5\ncarrot -2\nmango -8\nmango 40\nflour 15\nmelon 19\ngrapes -13\nflour -19\ndates 19\npear 14\npear 17\nkiwi 10\njuice 11\nmelon -10\nbanana 0\nhoney 18\ndates 23\npear -13\nmelon 1\nmelon -13\nkiwi -16",
            "expected_output": "dates 67"
          },
          {
            "input": "11 30\njuice 17\ndates 6\nhoney 50\nbanana 43\napple 2\neggs 21\neggs 33\ngrapes 14\napple 31\ngrapes 32\napple -1\nflour 3\nmelon 7\ngrapes -12\nhoney 19\nkiwi 22\napple -10\npear 6\ngrapes 14\napple 28\njuice 20\ncarrot 16\ndates -8\nhoney 1\nmango 17\nkiwi -13\nflour 13\napple -1\nbanana -12\nbanana 3\ncarrot -4\ncarrot 26\nmelon -13\nkiwi -12\ncarrot 16\nhoney 26\nmelon -8\njuice -12\njuice 0\ngrapes 26\npear -5",
            "expected_output": "honey 96"
          },
          {
            "input": "2 5\ndates -4\njuice 0\nbanana -18\nbanana 13\njuice -11\nmelon 28\njuice 5",
            "expected_output": "melon 28"
          },
          {
            "input": "18 32\ncarrot 34\nbanana 29\ngrapes -4\ngrapes 15\ndates -5\nhoney 16\nflour 1\ndates 32\ngrapes 29\napple 20\nbanana -9\nflour 23\ncarrot 18\nbanana -8\nflour 45\njuice 19\nflour 7\ndates 5\ndates -1\nhoney -19\ncarrot -18\nhoney 7\nmelon 25\napple 15\nflour 27\nbanana 28\nmelon 19\nkiwi 22\nbanana -4\nkiwi 11\npear 5\ngrapes 22\ngrapes -5\ndates -3\nhoney 18\ncarrot -12\nflour -9\nflour 13\napple 20\nkiwi -19\nmelon 25\nhoney -12\njuice -2\ndates -18\nmango 21\nkiwi 3\nbanana 4\nbanana -10\nmelon 15\npear -7",
            "expected_output": "melon 84"
          },
          {
            "input": "7 5\ndates 11\ncarrot 31\nhoney -8\neggs 2\njuice 41\neggs 33\napple 1\ndates -17\npear 26\nkiwi 20\nmelon 22\njuice -15",
            "expected_output": "eggs 33"
          },
          {
            "input": "9 29\nflour 21\nbanana 18\ndates 47\ncarrot 41\neggs 15\ngrapes 49\nbanana 1\ncarrot 7\nhoney 29\nhoney 2\nflour -1\napple 16\ndates -8\npear 21\nmelon 30\nmelon 0\ngrapes 1\nmango -8\nmelon -2\ngrapes 8\npear -20\neggs 30\nkiwi -14\ndates 22\neggs -4\ngrapes 4\nmango 11\ncarrot -9\neggs -16\ncarrot -6\nmango 29\nmango 27\nflour 6\ncarrot 12\neggs 25\npear 8\ndates -12\napple 16",
            "expected_output": "grapes 62"
          },
          {
            "input": "19 7\ngrapes 35\njuice -1\napple 10\ndates 13\njuice 3\nbanana 6\njuice 19\napple -2\ncarrot 45\ngrapes 6\nhoney 26\njuice 9\nhoney 38\nbanana 22\ngrapes 19\nflour 21\ndates 38\nmango -5\nmango -1\npear 7\nkiwi 15\ndates 2\ngrapes 23\nmango 16\njuice -20\npear 3",
            "expected_output": "carrot 45"
          },
          {
            "input": "2 29\ncarrot 12\napple 24\nmango -2\njuice 28\napple -12\nhoney 3\napple -3\njuice 30\nmelon 15\nmango 16\nhoney 30\njuice 24\nmelon 9\nhoney -12\nmango -12\njuice -17\napple -15\njuice 29\nbanana 19\nhoney 23\npear -20\njuice -17\nbanana -12\napple -18\nkiwi 22\njuice 10\nflour 15\npear 0\neggs 20\njuice 28\ngrapes 22",
            "expected_output": "juice 115"
          },
          {
            "input": "5 23\nflour 38\nhoney 11\nbanana 25\nflour 3\ndates 16\nkiwi -6\neggs 23\npear -11\njuice 9\nflour 28\nmelon -13\ncarrot -19\nhoney -12\ndates 12\nmango 11\ncarrot 21\nbanana -9\nbanana 7\nmelon -9\nmango 22\ngrapes 18\napple 23\nkiwi 22\nflour -16\njuice -17\njuice -2\ngrapes 1\ndates -1",
            "expected_output": "mango 33"
          },
          {
            "input": "10 16\neggs -4\njuice 23\neggs 28\ndates -9\nbanana 41\nmango 34\neggs 21\neggs 3\nflour 20\nhoney 3\njuice -13\nbanana -11\npear 22\neggs 24\njuice 6\nmelon -1\nflour 15\nbanana 23\napple -5\nmango -19\njuice 24\ncarrot 3\nbanana 8\npear -14\ngrapes 6\npear -3",
            "expected_output": "banana 61"
          },
          {
            "input": "7 12\ngrapes 42\nmango 5\nhoney 25\nmango 26\ndates 17\nhoney 26\nbanana -1\nhoney 15\nkiwi -1\nbanana 21\nflour 28\neggs 18\ncarrot 26\ngrapes 17\neggs 27\nmango -14\nhoney 24\ngrapes 1\nbanana -8",
            "expected_output": "honey 65"
          },
          {
            "input": "0 29\nmelon -4\nbanana 5\ndates -20\nkiwi 8\npear 6\nmango -7\ndates 21\ncarrot 2\nhoney 22\napple 24\nmango 1\ndates -6\nhoney -15\ncarrot -16\nkiwi 14\nmango 16\nmango -2\nhoney -14\nflour -7\ncarrot 5\njuice -8\ndates 20\ndates -12\neggs 28\napple 1\neggs -7\ndates -7\nmango -20\ncarrot 27",
            "expected_output": "apple 25"
          },
          {
            "input": "2 36\ndates 25\nflour 6\npear 15\nbanana -5\nkiwi 11\nkiwi 25\nmelon -12\nmango -7\nmango 3\napple 2\nbanana -2\napple 11\neggs 10\nbanana 13\ncarrot -2\nbanana -12\nflour 2\ncarrot 19\ngrapes 12\ncarrot -12\nmango 27\nmango -9\ncarrot -3\nkiwi 25\nbanana -2\nflour 27\napple -7\njuice 3\nkiwi 2\ncarrot -2\napple 25\ngrapes 11\nflour -5\nbanana -6\nhoney 19\nflour 22\npear -14\nhoney 20",
            "expected_output": "kiwi 63"
          },
          {
            "input": "9 10\ngrapes -1\nmango 7\ncarrot 17\njuice 1\njuice 5\nbanana 49\ncarrot 47\napple -9\ncarrot 50\njuice -17\nhoney 20\neggs -5\ngrapes 16\nmango -9\nmelon -1\nflour -16\nkiwi 1\ndates -6\nhoney 19",
            "expected_output": "carrot 50"
          },
          {
            "input": "8 2\nflour 31\nhoney 41\ngrapes 45\ngrapes 50\nmango 27\njuice 30\neggs 10\ngrapes -6\napple 19\ndates 9",
            "expected_output": "honey 41"
          },
          {
            "input": "1 25\nbanana 39\nflour -19\neggs 16\nkiwi 29\nflour 27\neggs -6\npear 26\nkiwi -7\nmango 18\njuice 23\nmango 11\nkiwi 0\nflour 18\napple -7\nkiwi 27\nflour -12\njuice -5\nmango -4\nmango -4\nmelon 8\ncarrot 29\nmelon 25\nbanana -1\ndates -18\neggs 7\napple -10",
            "expected_output": "kiwi 49"
          },
          {
            "input": "5 16\nflour -7\nbanana 6\ngrapes 12\nmango 49\nhoney 31\ndates 23\nkiwi 12\napple -17\ncarrot -20\ngrapes -3\npear 13\nmelon 30\nhoney 16\ncarrot 28\nkiwi -9\ndates -3\njuice -4\njuice -4\nhoney 28\nkiwi -20\nkiwi 6",
            "expected_output": "honey 75"
          },
          {
            "input": "15 20\ndates 33\njuice 28\nhoney 42\ncarrot 21\nflour 40\ngrapes 40\nbanana 11\nbanana 20\neggs 1\neggs 30\ndates 45\nflour 28\ngrapes 16\nbanana 36\ngrapes -6\nmelon -14\njuice -20\npear 29\nmelon -1\njuice -19\nmango -18\npear 13\neggs 24\npear -9\njuice 4\ncarrot 18\njuice 1\nmelon -19\nmelon 19\nkiwi 24\njuice 13\ncarrot -2\ncarrot -3\nmelon 17\neggs 28",
            "expected_output": "eggs 82"
          },
          {
            "input": "19 24\neggs 47\neggs 20\nflour 20\nbanana 8\nmango 47\ncarrot 29\napple 33\ngrapes 29\ngrapes -8\ngrapes 42\nhoney 5\ngrapes 43\nflour -3\ngrapes 3\neggs 41\nmango 21\ngrapes -3\nflour 31\nflour -1\nflour 15\nkiwi -10\ndates 6\njuice 10\npear -1\njuice -7\nhoney 30\napple -8\nkiwi 18\njuice -4\ncarrot 20\ncarrot -18\nkiwi -18\njuice 23\nbanana 5\nkiwi -11\nbanana -4\npear 5\ncarrot 11\ndates 6\ncarrot 11\neggs 22\nmango -15\ngrapes 17",
            "expected_output": "eggs 63"
          },
          {
            "input": "15 34\ndates 1\neggs 31\nbanana 27\ngrapes -3\njuice 29\neggs 31\ndates 33\ngrapes 10\nhoney 14\ndates 2\ncarrot 17\nflour 12\njuice 25\nflour 12\nhoney 9\ndates 27\neggs -2\ngrapes 15\ndates 3\ndates 30\nkiwi -7\ncarrot -2\neggs 22\neggs 6\npear -12\nkiwi -5\ndates 16\ngrapes -3\napple 5\nflour 7\nmelon -12\neggs 16\nmelon 18\neggs 25\ndates -15\npear 4\ngrapes 3\nmelon 7\njuice 13\ngrapes 12\nkiwi -16\napple -5\njuice 12\ndates 28\ndates 27\ndates -20\nmelon 20\nhoney -17\nmango 1",
            "expected_output": "dates 98"
          },
          {
            "input": "14 7\napple 37\nflour 40\njuice 1\nhoney 5\nbanana 24\nmango 49\nhoney 41\nflour 20\nflour 10\njuice 48\ncarrot 18\nflour -8\napple -6\neggs -10\nkiwi 13\ndates -2\nbanana -4\njuice 7\ncarrot 10\napple -16\nkiwi -10",
            "expected_output": "juice 55"
          },
          {
            "input": "7 29\napple 18\ngrapes 22\nbanana -2\ngrapes 7\nhoney 18\ndates 50\ncarrot 18\nkiwi 2\nflour 24\npear 20\ncarrot -13\nkiwi 4\npear -13\nmelon -4\nhoney -8\napple 16\napple -16\ncarrot -15\neggs 19\nflour 11\npear -1\neggs 3\nhoney -15\npear 26\ncarrot 18\nhoney 12\nkiwi 7\njuice 14\nmango -2\ngrapes -12\ngrapes -2\napple -9\napple 18\nmango 4\ndates 4\nhoney 25",
            "expected_output": "dates 54"
          },
          {
            "input": "19 35\ndates 30\ndates 35\nbanana -9\neggs 20\njuice 35\nflour 21\nflour -10\ndates 26\nhoney -4\neggs 29\nhoney 42\njuice 30\nflour 25\nmango 8\nflour 18\ndates -5\nflour 27\nflour -1\nmango -3\nhoney 0\npear 26\npear -7\nhoney 11\neggs -5\npear 7\nkiwi 30\nmango 5\neggs -4\ndates -17\ncarrot 9\ncarrot -11\nmango -5\npear 26\nkiwi -1\ncarrot -8\napple -17\neggs -3\napple 10\ngrapes 19\neggs -13\ndates 20\njuice -3\nbanana 12\njuice 13\nmelon 15\nmelon -18\ncarrot 2\ncarrot 0\ndates -16\ngrapes 27\npear -14\nflour 1\ndates 9\neggs -17",
            "expected_output": "honey 53"
          },
          {
            "input": "9 40\nbanana 48\neggs 33\ncarrot 35\njuice 8\nbanana 2\njuice 5\napple 22\ncarrot -5\ndates -10\ncarrot 30\ndates 25\neggs 3\ncarrot 18\napple 0\nflour 10\ngrapes 7\ngrapes 25\nmango 24\nflour -18\nkiwi 5\ngrapes -7\npear 10\nhoney 17\nkiwi -5\nhoney 17\njuice 19\nbanana 4\nkiwi 25\ncarrot 10\nflour 19\nkiwi -19\nflour 21\nhoney -2\napple -15\ngrapes -13\napple 26\npear -18\nbanana -19\neggs 30\nmango -20\nhoney 15\njuice 26\npear 26\nhoney -11\neggs -2\nkiwi -4\ngrapes 4\npear 14\nbanana 6",
            "expected_output": "eggs 64"
          },
          {
            "input": "3 27\nflour -9\neggs 14\njuice 13\ncarrot -10\nflour 17\nhoney -13\nhoney -3\nmango 20\nmango 24\ncarrot 10\nmango 29\npear 24\ndates 15\nhoney -16\ncarrot -11\ncarrot 19\nbanana 9\nhoney -11\nkiwi -9\neggs 5\nmelon 25\nmango 19\nmango -13\nflour -4\napple -11\nkiwi 18\ngrapes 17\neggs -8\njuice 17\nmelon 29",
            "expected_output": "mango 79"
          },
          {
            "input": "1 11\nbanana 37\nkiwi -11\nmelon 14\ncarrot 23\nhoney -2\nmelon 26\ncarrot -14\ncarrot -19\nmango -9\nflour 7\nbanana -11\nhoney -6",
            "expected_output": "melon 40"
          },
          {
            "input": "10 32\nmango 24\nflour 44\nflour -9\ndates 21\nhoney 23\njuice 13\nbanana 27\napple 39\neggs -4\nflour 39\nmelon -1\nkiwi -1\neggs 1\nmelon -5\nhoney -1\napple 30\nmelon -2\nkiwi -17\neggs 27\nkiwi 19\ncarrot 30\napple 19\nflour 26\nmelon 18\npear 10\ncarrot 28\ndates -9\ngrapes 3\ngrapes 10\nmango -8\neggs 23\ngrapes -7\ndates 25\neggs 17\neggs -13\nflour 8\nhoney 25\nmango -3\ndates -19\njuice 5\nbanana -16\nkiwi -14",
            "expected_output": "apple 88"
          },
          {
            "input": "12 8\ndates 16\ndates 35\nbanana 12\neggs 2\ndates -5\ngrapes 22\ndates 7\napple 14\ncarrot 24\ncarrot 31\napple 30\nmango 37\nmelon 29\njuice -1\nmelon 22\ngrapes 6\nflour -14\nhoney 19\nkiwi -4\nhoney 21",
            "expected_output": "melon 51"
          },
          {
            "input": "4 25\neggs 50\napple 26\ncarrot 29\ndates 23\njuice 12\nhoney -17\nbanana -8\neggs 1\neggs 30\npear 18\napple 1\nbanana -2\nmelon 15\ngrapes 18\napple 21\nhoney -16\ncarrot 25\napple -12\ncarrot -14\nkiwi 11\nkiwi -3\npear 6\ndates -9\nflour 20\ngrapes -11\ndates -12\ncarrot -6\ncarrot 16\nbanana 12",
            "expected_output": "eggs 81"
          },
          {
            "input": "8 10\napple 10\njuice 49\napple 22\nflour 50\njuice 36\napple 13\ncarrot 28\napple 45\ndates -14\npear -4\nflour -16\nmango 3\nmelon -15\ngrapes 16\nmelon 11\nbanana 3\nmelon -17\nmelon -1",
            "expected_output": "apple 45"
          },
          {
            "input": "6 9\ncarrot 50\neggs -7\ncarrot 24\nmango 12\neggs 8\ncarrot -5\nhoney 14\npear 29\ncarrot 2\nbanana -3\nkiwi -8\nflour 18\nmango 13\neggs -5\nmango 14",
            "expected_output": "mango 39"
          },
          {
            "input": "3 29\ncarrot 0\ndates 13\nmango 44\nkiwi 3\nmango -5\nbanana 4\njuice 20\nkiwi 6\ngrapes 24\npear 9\nmango 15\njuice 0\nhoney -16\nkiwi 8\ngrapes 6\njuice -8\nhoney -7\nkiwi 28\npear 21\neggs 21\neggs 21\ncarrot -6\neggs 22\neggs -5\nhoney 29\neggs 17\nbanana 12\ngrapes -12\nmelon 19\nhoney 8\ngrapes -2\nmelon -19",
            "expected_output": "eggs 76"
          },
          {
            "input": "8 29\neggs -3\njuice 31\neggs 2\nbanana 27\ncarrot 39\napple 21\neggs 19\ndates 6\nbanana 14\neggs -12\njuice -7\neggs -3\nflour 19\neggs -5\npear -12\napple -3\nmango -3\neggs -7\npear 10\npear -15\napple 7\neggs 19\neggs -4\napple 23\ndates -15\ngrapes 4\ncarrot 24\npear -4\nkiwi 23\neggs 22\ngrapes -1\npear 10\nbanana 25\npear -20\njuice -18\nflour 24\ndates -16",
            "expected_output": "banana 66"
          },
          {
            "input": "1 16\ngrapes 11\nmango 17\nmango -10\ncarrot -17\nhoney -4\ncarrot 28\nbanana 27\njuice 16\napple 30\npear 17\nkiwi -9\njuice 17\ndates -18\nmango 30\nflour 16\neggs -6\npear 12",
            "expected_output": "mango 37"
          },
          {
            "input": "0 7\npear 30\ndates 3\nhoney -5\nhoney -7\nhoney 15\nkiwi -12\ngrapes 20",
            "expected_output": "pear 30"
          },
          {
            "input": "7 10\ncarrot 30\napple 13\napple 20\nhoney 11\njuice -6\ngrapes 29\nhoney -10\ngrapes 18\nhoney 10\neggs 7\npear 20\nbanana 29\napple 19\ncarrot 23\ncarrot -1\napple -13\nkiwi 15",
            "expected_output": "carrot 52"
          },
          {
            "input": "14 24\napple 32\ngrapes -10\nmango 19\nflour 33\ncarrot 47\napple 19\ngrapes 22\nflour 50\napple 34\nhoney 32\neggs 8\ngrapes 34\nhoney 5\ncarrot 30\nflour -9\nkiwi 1\ndates 10\nbanana 26\ncarrot -17\nhoney -12\ngrapes 11\nbanana -11\ngrapes 29\neggs -3\nhoney 26\nflour 15\napple -5\ncarrot 9\napple 23\ncarrot 24\nmango 13\nflour -1\nmango -20\neggs -3\napple 11\ngrapes -17\ncarrot -1\ncarrot 21",
            "expected_output": "carrot 66"
          },
          {
            "input": "17 31\nflour 3\napple 33\nhoney 25\neggs 1\ncarrot -10\nflour 32\nmango -8\ngrapes 46\neggs 6\napple 47\ndates -4\nhoney -9\nflour -8\ngrapes -10\neggs -9\nmango 44\nhoney 16\nhoney -8\napple 15\nflour 21\ndates 17\ngrapes 6\nkiwi 1\neggs -16\ngrapes 27\njuice -2\nbanana 13\ngrapes -16\nmango 24\nflour -14\nkiwi -16\nflour 27\nkiwi 17\nhoney -13\nmango -18\neggs 0\nflour 15\napple 30\ngrapes -18\npear 25\ndates 25\njuice 18\nmelon 16\nhoney -3\ndates 16\npear 2\njuice -10\nmelon 30",
            "expected_output": "apple 92"
          },
          {
            "input": "20 27\nbanana -4\napple -8\ndates 46\ngrapes 32\nhoney 46\ngrapes 39\nhoney -8\njuice 19\nmango 14\ngrapes -7\nmango 8\neggs -8\nflour 41\nmango 4\ncarrot 34\neggs 13\napple -6\nhoney 17\ndates 5\napple 40\nhoney 21\nbanana 18\neggs 14\njuice 6\ndates -16\nmelon -10\nmelon -17\napple 29\nbanana 2\nhoney -20\ndates 7\njuice -12\nflour -3\ndates 6\nbanana -2\nmelon 6\nkiwi -17\nmelon 18\neggs 8\nhoney 20\nbanana 6\nmango -15\nmelon 8\nhoney -5\ngrapes 4\napple 23\ndates -5",
            "expected_output": "apple 92"
          },
          {
            "input": "4 21\nbanana -3\ndates 24\nhoney 8\nmango 8\nmango 3\ncarrot -3\ndates -10\nmelon -8\ngrapes 12\nmango -17\nmelon -10\ndates -1\njuice 6\nbanana 6\ndates -17\njuice -15\ncarrot 1\nflour 20\nhoney -6\nflour 24\ndates -4\njuice 29\nbanana 26\nmango 7\nkiwi -19",
            "expected_output": "flour 44"
          },
          {
            "input": "13 10\ndates 14\ndates 41\neggs -3\nhoney 2\njuice 20\ncarrot 48\nbanana 16\nhoney -10\ncarrot 18\ndates 28\nflour 34\nhoney 41\ngrapes 38\ngrapes 13\neggs -14\napple 3\nhoney 30\ndates 28\ndates 6\nkiwi 22\nkiwi 6\nhoney -5\ndates -9",
            "expected_output": "honey 66"
          },
          {
            "input": "0 23\nmelon 14\nbanana -7\nmango 22\napple 10\nbanana 2\nkiwi 16\ncarrot 20\nmango 20\nmango 13\ndates 30\njuice 17\nbanana 27\neggs 23\nhoney -15\nbanana 5\nmelon -10\nmango 8\napple 22\nhoney -15\ndates 7\nmango -9\nmango 28\nmango -7",
            "expected_output": "mango 75"
          },
          {
            "input": "20 4\ndates -4\ndates -8\nbanana -9\neggs -10\nmango 33\nhoney 37\ndates -4\neggs 44\ndates 41\nmango 12\neggs -5\ngrapes 8\nflour 49\ngrapes -5\nhoney 14\ncarrot 4\neggs 31\ngrapes 40\ndates 47\ngrapes -7\nkiwi -3\neggs -11\nmango 6\nkiwi 24",
            "expected_output": "flour 49"
          },
          {
            "input": "16 9\ncarrot 40\napple 23\nmango 3\ngrapes 7\nflour 42\ncarrot 44\nmango 27\njuice 6\nflour 43\ndates 33\ngrapes 2\nhoney 26\nhoney 41\nbanana 30\njuice 31\ngrapes 25\njuice -5\nkiwi -10\nmelon -5\nkiwi -2\ndates -7\nkiwi 9\nflour 21\nbanana -19\nflour -9",
            "expected_output": "flour 55"
          },
          {
            "input": "10 14\nbanana 7\nbanana -4\neggs 35\napple 43\ncarrot 14\njuice 17\njuice 30\nflour 4\nhoney 13\ngrapes 28\nflour 20\neggs -13\njuice -9\nmango 21\nmelon -18\nhoney 13\nkiwi -8\neggs 22\napple -2\nmelon -19\nkiwi 3\nmelon 16\nflour 22\neggs 12",
            "expected_output": "eggs 56"
          },
          {
            "input": "3 7\njuice -7\ngrapes 36\nhoney 33\napple 8\njuice -12\ngrapes -10\njuice 14\ncarrot 23\ndates -16\neggs 0",
            "expected_output": "honey 33"
          },
          {
            "input": "15 21\nflour 34\neggs -7\ngrapes 18\nbanana 5\njuice -6\napple 20\nbanana -10\njuice 21\nbanana 42\njuice 24\nflour 6\njuice 21\ngrapes -10\nbanana 32\nmango 39\ngrapes -9\ncarrot -7\ncarrot -20\neggs 18\ncarrot 17\nbanana -11\napple -20\nkiwi -1\nmelon 18\ncarrot -15\nmango 28\napple 5\nbanana 29\nmelon 15\neggs 2\nkiwi 20\neggs 25\ncarrot -18\nbanana 15\nkiwi 25\ndates 7",
            "expected_output": "mango 67"
          },
          {
            "input": "11 40\neggs -1\ngrapes 29\nhoney 36\nhoney 7\nbanana 16\njuice 11\njuice 28\nflour -4\nhoney -5\nmango 15\nhoney 37\ncarrot -13\nbanana 2\ndates 16\nbanana -19\nbanana 18\npear 30\nbanana -17\neggs -20\npear -15\nbanana -10\nflour 16\nmango 29\nbanana 30\nflour -20\nmango 15\nbanana 12\nkiwi 5\nbanana 24\nflour -18\nmelon 7\njuice 25\nkiwi 17\njuice 6\npear -14\neggs -5\neggs 16\nkiwi -7\nmango -19\npear 15\ngrapes 5\napple -13\nkiwi 28\nbanana -1\nbanana -10\npear 9\nmelon 6\npear 18\nmango 25\ncarrot 21\nhoney 9",
            "expected_output": "mango 65"
          },
          {
            "input": "2 23\neggs 40\ncarrot 47\nflour -3\napple 19\nmelon 11\njuice -1\ndates 13\npear 25\nhoney -4\nbanana 17\napple -8\nmango -7\njuice -18\nmelon 24\nkiwi 26\nmelon 27\ncarrot 22\ngrapes 21\nmango 5\ncarrot 0\nmelon 26\ndates -16\nmango 20\nmango 3\ngrapes 5",
            "expected_output": "melon 88"
          },
          {
            "input": "18 2\njuice 25\nflour -6\nmango -10\ngrapes 33\nmango -8\ndates 40\ngrapes 46\nbanana 35\njuice 43\ndates 3\nflour 0\ndates 40\njuice 47\ngrapes 47\nbanana 35\njuice 3\nhoney -8\nbanana 34\nhoney 17\ndates 3",
            "expected_output": "grapes 47"
          },
          {
            "input": "7 37\nflour 26\njuice 19\ndates 40\nflour -9\njuice -5\ndates 16\nhoney 27\neggs -20\napple -18\njuice 26\neggs -2\ncarrot 1\nmango 24\ncarrot 14\ncarrot 22\ndates 26\npear 28\nkiwi -14\nkiwi 18\nkiwi 7\nmango 6\njuice -12\ngrapes 27\nflour -4\ncarrot -18\ncarrot 26\nflour 11\nbanana 19\ngrapes 13\nmango 17\nmelon 29\nmango 27\ndates 3\ndates 2\njuice -7\ndates -2\nmango 14\ncarrot 6\npear -11\nflour -12\npear 18\nflour -14\neggs 20\nflour -18",
            "expected_output": "mango 88"
          },
          {
            "input": "14 20\nbanana -6\nbanana 19\ncarrot 46\nflour 18\napple 26\neggs 16\ngrapes 0\ngrapes 29\nbanana 32\ngrapes 20\neggs 26\nhoney 45\nbanana -2\ncarrot 42\ndates -9\npear 21\njuice 14\nflour 1\ncarrot -11\nmango -10\nbanana 19\npear 0\nflour -14\njuice 2\neggs 17\npear 29\nbanana -14\ngrapes -4\npear 3\nmelon 16\napple 16\nbanana 29\nhoney 12\nflour -18",
            "expected_output": "honey 57"
          },
          {
            "input": "20 5\njuice 39\nmango 29\napple 43\njuice 25\ncarrot 20\ncarrot 39\neggs 28\napple 7\nmango 23\nbanana 2\nhoney 37\ngrapes 48\ndates 29\ngrapes 19\nbanana 30\nbanana 30\nhoney 46\nbanana 28\njuice 5\neggs 50\nkiwi 24\nkiwi 25\neggs 30\nflour -5\nmelon 3",
            "expected_output": "eggs 80"
          },
          {
            "input": "4 29\nmango 39\nbanana 23\nmango 35\nmango 10\nhoney -8\ndates -20\ngrapes 8\nkiwi -2\ngrapes 4\npear 4\nflour 14\npear 2\napple -1\ndates 0\nmango 23\nmango -5\neggs -12\nmelon 14\nmango 13\ngrapes 21\nmelon 25\nhoney 15\nmango 23\nkiwi 25\nkiwi 16\napple 7\nbanana 6\nhoney 5\ngrapes -17\nflour 0\npear 21\npear -3\nmango -7",
            "expected_output": "mango 57"
          },
          {
            "input": "8 40\nmango 2\nmango -2\nbanana 38\nflour 12\ndates 41\napple -10\nmango 27\ngrapes 24\nflour -20\ngrapes 24\nbanana 6\neggs 5\neggs 18\ncarrot -10\nbanana -9\nbanana -7\nmelon 0\ncarrot 25\nbanana 15\njuice -7\nmango 6\ncarrot 17\nkiwi 23\npear 28\napple -3\nhoney -17\ngrapes 11\neggs 18\nmango 9\nhoney 30\ngrapes 10\nmelon 12\nbanana 30\napple -11\nkiwi -19\ncarrot -5\nmango 8\napple -13\njuice -13\njuice -11\njuice 10\njuice 10\nmelon 7\napple -18\njuice 20\neggs 23\napple 3\ngrapes 9",
            "expected_output": "grapes 78"
          },
          {
            "input": "18 15\nmango -2\nbanana 11\ngrapes 19\nmango 18\ncarrot 9\napple 29\ncarrot 46\njuice 39\nbanana 22\ndates -7\nflour 14\nmango 20\neggs 28\nhoney 45\neggs -4\nbanana -1\ngrapes 42\ngrapes 3\neggs 2\neggs 19\nmango 9\ngrapes -19\nbanana 15\ncarrot 27\neggs -5\napple 25\njuice 17\nmelon -1\nmango 29\ngrapes -4\nflour -3\ncarrot 5\nflour 15",
            "expected_output": "carrot 78"
          },
          {
            "input": "1 7\nhoney -4\nflour -5\ncarrot -12\nmelon 3\ngrapes 18\napple 1\nmango 18\ngrapes 20",
            "expected_output": "grapes 38"
          },
          {
            "input": "11 21\napple 27\nbanana 20\neggs 4\njuice 15\nbanana 6\nhoney 8\ndates 31\ndates 3\nhoney 40\ncarrot 30\nbanana 7\ndates -9\nkiwi -1\neggs 20\nflour 23\nkiwi -14\nmelon 17\ndates -8\nhoney 13\nhoney 0\nbanana -1\npear 16\nbanana -18\ncarrot 27\njuice -12\nflour 8\npear 6\nkiwi -17\ngrapes -18\nmelon 16\neggs -6\ncarrot -5",
            "expected_output": "honey 53"
          },
          {
            "input": "4 22\ngrapes 34\ndates 31\nhoney -7\njuice 6\ndates 4\ncarrot -5\nmelon -12\ndates 7\nbanana 13\nflour -15\nmango 10\nmango 10\ngrapes 24\ndates 0\nmango -5\ndates 18\nkiwi -9\njuice -19\nflour 10\npear -17\nbanana 14\ncarrot 27\nkiwi 9\ncarrot -17\npear 26\ndates -13",
            "expected_output": "grapes 58"
          },
          {
            "input": "1 28\neggs 39\nmelon 23\neggs 17\nbanana 13\ncarrot -14\njuice 23\nflour 12\nbanana -17\nmango -20\nmango 6\ndates -13\ndates 25\nmelon -10\ncarrot 3\nhoney 2\nflour 1\npear 23\ndates -15\nflour 22\nkiwi 26\ncarrot 4\nflour -6\ngrapes 3\ngrapes -13\nflour 18\nmango 11\napple 2\njuice 12\napple -11",
            "expected_output": "eggs 56"
          },
          {
            "input": "10 28\nhoney 45\nmango 6\nhoney 15\ncarrot 23\njuice -2\nmango 29\neggs 45\ndates 29\nmango 24\njuice 38\ngrapes 3\nmango 5\npear 6\ndates -16\njuice 12\ngrapes -11\ngrapes -18\npear -18\ndates 12\nmango 7\neggs -7\neggs 12\njuice 16\nkiwi 29\nflour -6\nflour 12\ndates -1\nhoney 7\ncarrot 20\nmelon -10\npear 4\nkiwi -19\neggs -9\ngrapes 2\neggs 18\ncarrot 4\nkiwi 14\nbanana -16",
            "expected_output": "juice 66"
          },
          {
            "input": "5 35\nbanana 18\nmango 26\nflour 30\nbanana 18\neggs 17\nbanana 10\njuice 8\napple 6\njuice -5\nflour -19\ndates -4\nmelon 20\ncarrot 30\ncarrot -7\njuice -7\nflour 25\nbanana 11\npear -17\ndates 28\ngrapes 23\nhoney 30\napple 2\ngrapes -16\nmelon -6\ngrapes 22\ngrapes -15\nkiwi -3\nflour 23\ngrapes -3\npear 21\nkiwi -15\nkiwi 3\nkiwi 26\nhoney 24\nhoney 21\ncarrot -13\npear 24\ncarrot 17\neggs -2\nmango -18",
            "expected_output": "honey 75"
          },
          {
            "input": "1 39\neggs -3\nmelon 20\ndates -15\ncarrot 21\nflour 11\nmango 6\neggs 15\nflour 8\nflour -14\nkiwi 1\ngrapes -7\nmelon -11\napple -12\napple 1\napple 28\ncarrot -1\napple 0\npear -14\neggs -17\nhoney 28\neggs 20\nbanana -9\npear 29\nhoney 3\ndates 3\nflour 10\nkiwi -2\nkiwi 16\nbanana -3\napple -16\napple 30\njuice 22\nmango -4\njuice 16\ngrapes -3\nmango 18\ndates 26\ndates 8\njuice -12\nflour 17",
            "expected_output": "flour 32"
          },
          {
            "input": "16 1\ncarrot -2\nmango 14\ndates 3\nmango 5\napple 43\nbanana 11\ngrapes 3\neggs 1\napple 8\ncarrot 36\nmango 43\nbanana 46\ncarrot 18\ngrapes -5\ngrapes 30\njuice 39\nmelon 21",
            "expected_output": "banana 46"
          },
          {
            "input": "11 23\napple 2\ndates -8\ngrapes 10\napple 30\nflour 35\nbanana 29\neggs 5\nbanana 19\nflour -7\ndates 1\njuice 25\nflour -7\npear -5\npear 27\nmango 9\nkiwi -18\nmango 12\napple 13\nflour -18\nhoney 11\npear 2\nmelon -18\nbanana -2\nbanana -7\ncarrot 27\ndates 15\ndates 17\nbanana 15\napple 13\napple -20\nmelon 21\nflour -17\ndates -3\nmelon 29",
            "expected_output": "apple 36"
          },
          {
            "input": "2 14\napple 21\nflour -8\nmelon 5\nkiwi -4\nhoney -5\neggs -20\napple -16\nflour 3\npear 22\ngrapes -3\ngrapes 30\nflour -11\ngrapes -4\npear 8\nflour 3\nflour 27",
            "expected_output": "pear 30"
          },
          {
            "input": "16 19\ndates 35\nhoney 4\njuice 31\ncarrot 42\nbanana 45\neggs 36\ngrapes -1\neggs 15\ncarrot 48\neggs 42\nflour -9\nflour -6\nflour 48\nflour 18\ngrapes 30\nhoney 22\nbanana 27\ncarrot 9\njuice 15\nbanana 5\napple 19\ncarrot 9\nmango 20\nmango -1\njuice -4\nkiwi -17\ncarrot 11\nkiwi 18\ngrapes 1\ncarrot 16\neggs 25\npear 2\nflour 22\napple 16\nmelon -8",
            "expected_output": "carrot 93"
          },
          {
            "input": "7 36\ncarrot 16\njuice 26\napple 34\napple 36\napple 27\nflour 37\nmango 10\ngrapes 10\npear -6\ngrapes 24\ngrapes -1\nbanana 25\ngrapes 29\nkiwi -12\nbanana -6\ndates -17\nkiwi -15\nmelon -5\nbanana 19\ncarrot 6\nmelon 15\njuice -11\napple 0\npear -10\ncarrot -1\njuice -6\npear 23\nkiwi 24\nmelon -8\ndates 20\nkiwi 20\ndates -1\neggs 5\ndates 0\nkiwi -11\neggs 8\nmango 19\npear 4\ndates 4\neggs 21\neggs -17\njuice 2\ngrapes 4",
            "expected_output": "grapes 66"
          },
          {
            "input": "11 28\nflour 28\nbanana 25\ndates 46\napple 31\neggs 42\napple 34\njuice 46\nflour 21\ngrapes 4\napple 26\njuice -9\nmelon 11\nmelon -1\ncarrot -10\nmelon 21\nkiwi 17\nhoney -9\npear -1\ngrapes 26\nflour 10\nflour -7\njuice -2\ncarrot 27\nkiwi -11\ncarrot 26\ndates -7\ncarrot 2\nflour -14\nkiwi 12\nmango 20\nbanana 28\napple -17\nhoney 8\npear -6\ndates 28\nhoney -8\nhoney 4\nkiwi 15\nmelon -13",
            "expected_output": "dates 67"
          },
          {
            "input": "6 20\ndates 12\napple -9\neggs 7\nmango 43\ncarrot 30\nflour -8\ndates 6\nkiwi 6\neggs -12\njuice -15\neggs -2\npear 7\npear -20\ndates -17\nhoney -19\neggs -20\nflour 23\nhoney 7\nbanana 17\ncarrot -7\ndates 17\nmango 8\npear 20\nbanana -9\nkiwi 27\ndates 4",
            "expected_output": "mango 51"
          },
          {
            "input": "4 14\ncarrot 26\ndates 33\nbanana -10\nbanana 28\ndates 2\nflour -10\nhoney 3\nhoney 16\neggs 3\nhoney 3\ndates 18\nmelon 3\nflour -10\nbanana 8\npear 13\nbanana 13\nmango -3\nmelon 0",
            "expected_output": "dates 53"
          },
          {
            "input": "1 6\neggs 45\neggs 30\nmelon -14\nmango -2\nkiwi 29\nkiwi 19\ndates 30",
            "expected_output": "eggs 75"
          },
          {
            "input": "5 29\nflour -3\neggs 35\ncarrot 34\neggs 7\nbanana 20\nmango 29\ncarrot 19\nmango -9\nkiwi 23\ngrapes -13\npear 3\nmango 28\nflour 7\nflour 26\ndates 14\ngrapes -16\nhoney 1\npear 29\npear -19\njuice -19\ngrapes 20\npear -17\njuice -5\napple -11\njuice 3\ndates 30\nkiwi 17\npear -13\nhoney 22\nbanana 28\nflour 8\nhoney 0\npear -19\napple -12",
            "expected_output": "carrot 53"
          },
          {
            "input": "9 3\nhoney -10\nflour -7\neggs 36\njuice 7\napple 29\ndates 33\ngrapes 26\ncarrot -3\ncarrot -7\ncarrot -19\njuice -4\ngrapes -19",
            "expected_output": "eggs 36"
          },
          {
            "input": "8 36\nmango 49\nbanana 37\napple 37\njuice 35\njuice 4\nmango 16\nbanana -7\ngrapes 7\njuice -7\npear 11\neggs -20\npear -1\nmelon -2\nmelon 8\ndates 20\nhoney -15\nmango -13\napple 1\npear 11\nhoney 6\ngrapes 12\napple 6\nmelon 12\nhoney -16\nmango 15\nhoney -14\nhoney -12\nmelon 13\ngrapes -1\nmango 15\nkiwi -11\ncarrot -16\ngrapes 9\neggs 12\njuice -2\ndates 28\napple 5\nmango -14\ndates 17\nkiwi -17\ncarrot 12\nhoney -16\nmango 25\ncarrot 22",
            "expected_output": "dates 65"
          },
          {
            "input": "8 9\ncarrot 39\nmango 7\njuice 16\nhoney -8\ngrapes 20\neggs 49\nhoney -9\nmango -3\ngrapes -6\ncarrot 2\ngrapes 30\njuice -2\nmelon -8\ndates -13\ngrapes 7\ngrapes -9\napple -10",
            "expected_output": "eggs 49"
          },
          {
            "input": "16 6\njuice 21\nmango 48\nhoney -6\nhoney 41\nhoney 49\nflour 12\ncarrot 12\neggs 22\ngrapes 41\ndates 24\nmango 40\ngrapes 23\napple 49\nhoney 35\ndates 12\ndates 32\ndates 16\nmelon -11\ncarrot -18\neggs 19\neggs -3\neggs -5",
            "expected_output": "apple 49"
          },
          {
            "input": "11 25\ngrapes -7\napple 47\ncarrot 40\ndates 25\njuice 30\ncarrot 16\ngrapes 37\ndates 14\ndates 48\neggs 1\neggs 12\napple 6\ncarrot -5\njuice 25\nflour 20\njuice -11\nhoney 14\nmelon -9\nmango -12\nhoney -10\nmango -19\nmango -20\nmelon 27\nbanana -3\nmelon -17\nhoney -11\nmango -19\nkiwi 11\ncarrot -17\npear 0\neggs 22\nbanana -19\njuice -1\nflour 18\npear 6\nmango 12",
            "expected_output": "apple 53"
          },
          {
            "input": "15 18\njuice 38\neggs 46\nhoney 20\nbanana -1\napple 25\ndates 3\neggs 20\ngrapes 27\ncarrot -5\napple 48\nmango 43\neggs 0\njuice 0\nmango 14\ndates -2\ngrapes -12\nkiwi -8\nmango -4\napple 7\nkiwi 3\nflour 25\ncarrot 15\ngrapes 1\nkiwi -17\nflour 14\neggs -20\njuice -15\neggs 0\nhoney 17\njuice -4\nmelon 18\nkiwi -9\nmelon -14",
            "expected_output": "apple 55"
          },
          {
            "input": "18 36\nflour 7\nhoney 15\nmango 37\njuice 47\napple 34\napple -3\napple 46\njuice -7\nhoney 0\ndates 36\ngrapes 34\nmango 40\njuice 43\ncarrot 8\neggs 3\nmango 43\ncarrot -1\ndates 22\nhoney -12\neggs -5\nflour 6\njuice 5\nflour 18\njuice -13\nkiwi 18\njuice 3\napple -8\npear 21\ndates -4\napple 14\nhoney 12\ndates 4\ncarrot 29\ndates 12\ndates 15\neggs 10\ndates 2\nbanana 0\nflour 13\npear -7\napple 10\ncarrot 6\npear -6\ncarrot -8\nmango 8\nmango 4\ngrapes 25\nkiwi 26\ncarrot -19\napple -14\ndates -6\ndates 6\npear 5\nbanana 15",
            "expected_output": "grapes 59"
          },
          {
            "input": "9 22\neggs 15\ncarrot 49\ngrapes 11\napple 4\ndates 49\ncarrot 6\nmango 9\ncarrot 14\ndates 9\nmango 12\neggs -20\napple 29\ngrapes -1\nmango -16\ncarrot -1\nhoney 15\njuice -15\npear 12\napple -7\nkiwi -14\nkiwi 5\nbanana 11\neggs 2\nhoney 9\neggs 30\napple 7\nflour 25\nhoney -2\nmelon -19\ndates 24\nmango 4",
            "expected_output": "apple 33"
          },
          {
            "input": "9 27\nflour -2\neggs 25\nmango 21\nmango 50\napple 35\neggs -6\nbanana 3\ngrapes 14\neggs 32\nflour 20\nmelon -19\nhoney -2\nbanana -12\nmango 12\ngrapes 1\nmelon 6\nbanana 20\nmango -18\nmango 1\nkiwi 14\nkiwi 17\ngrapes 11\nhoney 4\nbanana -11\ngrapes 15\neggs -3\nflour -1\nflour 30\nkiwi 26\njuice 8\nkiwi -10\nbanana -3\npear 24\nmelon 7\nkiwi 17\ngrapes 22",
            "expected_output": "kiwi 64"
          },
          {
            "input": "2 30\ndates 38\ngrapes 49\ncarrot -19\neggs -5\napple 27\ngrapes 13\njuice -2\njuice -14\ngrapes -17\nmango 1\ncarrot 4\nmango 17\nbanana 22\ncarrot 13\nflour 1\nmango -1\ngrapes 13\nflour 21\nkiwi -20\npear 0\njuice -5\nbanana 21\nkiwi -8\nmango 11\nflour 16\npear 9\nflour -20\nflour -12\nbanana 30\napple 10\nmelon -10\ngrapes -1",
            "expected_output": "banana 73"
          },
          {
            "input": "12 20\nbanana 29\napple 34\nbanana 39\neggs -3\nmango 46\ndates 20\napple 16\njuice 48\ncarrot 36\napple -2\nflour 3\nbanana 11\nhoney 13\ndates 13\njuice 24\nkiwi 18\neggs 2\ngrapes 30\nkiwi 30\nmelon 30\njuice -17\nmango 15\ncarrot 21\npear 17\neggs 15\nhoney -16\ndates 29\neggs 14\nhoney 30\neggs 23\nmango 2\nbanana -20",
            "expected_output": "mango 63"
          },
          {
            "input": "1 36\njuice 42\nkiwi 6\njuice 30\neggs 14\ngrapes 13\ngrapes 11\ngrapes 6\ngrapes 3\ncarrot 18\nmelon 5\nflour -10\nkiwi 24\nhoney 16\npear -4\nkiwi -13\nflour -8\ncarrot -8\ngrapes 18\nmango -4\nmango -8\napple 13\nmango 19\nkiwi 15\ncarrot -14\nbanana -18\napple 14\ndates 21\ndates -10\nkiwi -13\nmango 13\npear -8\njuice 10\nmelon 21\nkiwi -14\nhoney 3\napple 29\nhoney 10",
            "expected_output": "juice 82"
          },
          {
            "input": "3 25\nhoney 43\nbanana -4\ngrapes 33\napple -20\napple 12\ndates 4\nmelon -13\ngrapes -4\ndates 4\nmango 13\neggs -3\nflour 8\ngrapes -18\nhoney 13\nkiwi 28\ngrapes 10\napple 3\nmelon -8\nhoney 3\ndates 24\neggs -13\ngrapes -1\ndates 12\njuice -15\napple -6\napple -3\nbanana -14\nflour 3",
            "expected_output": "honey 59"
          },
          {
            "input": "11 21\nbanana 0\ncarrot 31\neggs 24\nmango 50\njuice 5\nflour 40\ncarrot 27\neggs 25\napple 19\nflour -5\ndates 33\npear 7\nkiwi 25\nhoney -13\nbanana 3\nmango 5\nflour -18\nmelon 3\npear -8\nmango -13\nflour -7\njuice 29\ncarrot 28\napple 23\nkiwi -12\npear 14\ngrapes -3\nmango 25\ndates 23\nmango 30\ngrapes -17\nflour 9",
            "expected_output": "mango 97"
          },
          {
            "input": "20 32\ndates -8\ncarrot 41\ncarrot 2\neggs 42\nflour 8\neggs 29\ncarrot 32\njuice 18\nmango 23\ngrapes 13\nmango 28\ngrapes 13\neggs 31\nflour -3\nhoney 11\ngrapes 11\neggs 34\ndates 11\napple 37\njuice 22\ncarrot 20\nkiwi 9\npear 10\nkiwi -5\nflour 27\neggs 5\npear -19\nhoney -5\nhoney -16\nbanana 6\nmango 7\nkiwi -9\npear -5\nflour 20\napple 21\ndates 29\neggs 27\napple -17\ncarrot 9\neggs 23\nflour 1\npear 10\nmelon 21\ngrapes -20\napple -17\nbanana -14\ngrapes -20\ngrapes 26\ngrapes 20\nkiwi 27\ngrapes 7\nhoney -20",
            "expected_output": "eggs 89"
          },
          {
            "input": "2 30\napple 23\ndates 47\ndates 14\ndates -19\njuice 15\nkiwi -5\nbanana 8\nbanana -3\njuice 16\nbanana 1\nmango 15\ncarrot -14\nflour -14\nmelon 14\nkiwi 5\ncarrot 3\nflour -20\npear 25\njuice 2\neggs 23\ncarrot 3\neggs -5\nbanana 11\npear 1\njuice 11\nhoney 18\nflour 20\ncarrot 16\neggs -2\ncarrot 22\nmelon 11\ncarrot -13",
            "expected_output": "juice 44"
          },
          {
            "input": "16 27\nbanana 11\nhoney 18\napple 31\ndates 26\ncarrot 21\ncarrot -3\njuice 2\njuice 25\napple 28\nmango 19\nflour 1\napple -5\ndates 12\nflour 44\ngrapes -8\ndates 36\nhoney 20\ncarrot -4\ncarrot 21\npear 12\nkiwi 2\nhoney -20\nhoney 13\neggs 14\ndates 25\nbanana 8\nhoney 26\npear 16\neggs 14\npear 23\npear 4\ndates -17\nkiwi -7\njuice 1\nkiwi -3\nkiwi 3\napple -2\ndates -17\napple 10\nmango 6\nhoney -12\ngrapes 8\napple 10",
            "expected_output": "pear 55"
          },
          {
            "input": "4 10\nflour -5\napple 39\nbanana 18\nflour -9\napple 10\nhoney 1\nflour 14\nkiwi -10\ncarrot -18\nhoney 13\nmango 29\nkiwi 9\nmelon 30\neggs 23",
            "expected_output": "apple 49"
          },
          {
            "input": "18 24\ngrapes -3\neggs -2\njuice 10\neggs 18\neggs 23\ngrapes 16\nbanana 28\nmango 16\neggs 31\neggs 29\ngrapes 24\nbanana -8\neggs 42\nmango 50\ngrapes 23\nbanana -1\nmango -5\nhoney 47\nhoney -14\ngrapes 20\npear 5\neggs -2\nkiwi -20\neggs 11\njuice 20\nhoney -10\neggs 5\njuice 7\njuice 27\neggs 6\nbanana 10\nmelon 20\nkiwi -20\ngrapes -9\napple 16\ncarrot -20\ngrapes -18\ngrapes 20\napple 18\napple 22\ncarrot -19\nflour 4",
            "expected_output": "juice 64"
          },
          {
            "input": "14 6\neggs -4\nbanana -4\ndates 47\njuice 27\ncarrot 16\ndates 34\nbanana 31\napple 43\nmango 43\napple 20\napple 12\nbanana 8\neggs 1\neggs -6\nflour -13\nkiwi 10\neggs 6\napple 7\nmango 7\ncarrot -10",
            "expected_output": "mango 50"
          },
          {
            "input": "15 22\nflour 5\ncarrot 24\njuice 21\nflour 25\neggs -10\nflour 50\ngrapes 1\nbanana 43\njuice 13\napple -8\nmango 47\neggs 13\neggs 1\ngrapes -9\nmango 41\nkiwi -4\napple 11\nbanana 29\ngrapes -18\npear 20\ndates -2\nbanana -19\nhoney 26\ndates -1\ngrapes -19\njuice -4\npear 0\nhoney 24\nmango -8\nmango -2\nmango -18\nmango -3\nmelon 17\nkiwi -1\nmango 11\napple -2\ncarrot 1",
            "expected_output": "banana 53"
          },
          {
            "input": "14 37\nmango 23\nbanana -1\ndates 26\ndates -3\nhoney 36\nflour -8\nflour 5\ncarrot 37\ndates 22\nbanana 6\ndates 8\nmango 47\nhoney -3\njuice 11\ncarrot 21\neggs 14\ngrapes 16\nflour 11\ncarrot -20\nbanana 1\nhoney -19\nhoney 21\nkiwi -15\nbanana 27\nhoney 17\nkiwi -9\ngrapes -6\nmelon 13\nbanana -18\napple -16\nhoney -10\ngrapes 17\nflour 25\nkiwi 27\nmango -10\nmelon 29\neggs -12\npear 30\ncarrot 22\neggs -3\napple -10\nmelon 6\npear -19\nhoney -8\njuice -8\nbanana -15\nbanana 10\npear -10\ngrapes -12\nmelon -15\nmango 27",
            "expected_output": "mango 64"
          }
        ]
      }
    ]
  }
}
