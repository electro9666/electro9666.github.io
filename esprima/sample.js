// http://esprima.org/demo/parse.html#
/*
    function ST(){
        this.name = "naanan";
        this.fn11 = function(){
            return console.CCC.DDD.log();
        }
    }
    var a = new ST();
    var c = a.fn11();
    ST.prototype.ccc.sayName = function(){
        console.log(11);
    };
    function f3(){
        function f12(){
            ST();
            f7();
            f2();
        }
    }
    var f1 = function(){
        function f11(){
            f3();
        }
    }
    f2 = function(){
		return console.AAA.BBB.log();
    };
    (function(){
        function f8(){};
        var f9 = function(){}
        f1();
    }());
    var f7 = (function(){
                function F77(){};
                F77.prototype.age = function(){}
                return F77;
            }());
*/
var data = 
{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "ST"
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "ThisExpression"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "name"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": "naanan",
                                "raw": "\"naanan\""
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "ThisExpression"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "fn11"
                                }
                            },
                            "right": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "CallExpression",
                                                "callee": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "MemberExpression",
                                                        "computed": false,
                                                        "object": {
                                                            "type": "MemberExpression",
                                                            "computed": false,
                                                            "object": {
                                                                "type": "Identifier",
                                                                "name": "console"
                                                            },
                                                            "property": {
                                                                "type": "Identifier",
                                                                "name": "CCC"
                                                            }
                                                        },
                                                        "property": {
                                                            "type": "Identifier",
                                                            "name": "DDD"
                                                        }
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "log"
                                                    }
                                                },
                                                "arguments": []
                                            }
                                        }
                                    ]
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            }
                        }
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "init": {
                        "type": "NewExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "ST"
                        },
                        "arguments": []
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "c"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "fn11"
                            }
                        },
                        "arguments": []
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "Identifier",
                                "name": "ST"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "prototype"
                            }
                        },
                        "property": {
                            "type": "Identifier",
                            "name": "ccc"
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "sayName"
                    }
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "Identifier",
                                            "name": "console"
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "log"
                                        }
                                    },
                                    "arguments": [
                                        {
                                            "type": "Literal",
                                            "value": 11,
                                            "raw": "11"
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            }
        },
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "f3"
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "FunctionDeclaration",
                        "id": {
                            "type": "Identifier",
                            "name": "f12"
                        },
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "ST"
                                        },
                                        "arguments": []
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "f7"
                                        },
                                        "arguments": []
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "Identifier",
                                            "name": "f2"
                                        },
                                        "arguments": []
                                    }
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                ]
            },
            "generator": false,
            "expression": false,
            "async": false
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "f1"
                    },
                    "init": {
                        "type": "FunctionExpression",
                        "id": null,
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "FunctionDeclaration",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f11"
                                    },
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                        "type": "Identifier",
                                                        "name": "f3"
                                                    },
                                                    "arguments": []
                                                }
                                            }
                                        ]
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false
                                }
                            ]
                        },
                        "generator": false,
                        "expression": false,
                        "async": false
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "Identifier",
                    "name": "f2"
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "ReturnStatement",
                                "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "console"
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "AAA"
                                                }
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "BBB"
                                            }
                                        },
                                        "property": {
                                            "type": "Identifier",
                                            "name": "log"
                                        }
                                    },
                                    "arguments": []
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "FunctionDeclaration",
                                "id": {
                                    "type": "Identifier",
                                    "name": "f8"
                                },
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": []
                                },
                                "generator": false,
                                "expression": false,
                                "async": false
                            },
                            {
                                "type": "EmptyStatement"
                            },
                            {
                                "type": "VariableDeclaration",
                                "declarations": [
                                    {
                                        "type": "VariableDeclarator",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f9"
                                        },
                                        "init": {
                                            "type": "FunctionExpression",
                                            "id": null,
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": []
                                            },
                                            "generator": false,
                                            "expression": false,
                                            "async": false
                                        }
                                    }
                                ],
                                "kind": "var"
                            },
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "f1"
                                    },
                                    "arguments": []
                                }
                            }
                        ]
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                },
                "arguments": []
            }
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "f7"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "FunctionDeclaration",
                                        "id": {
                                            "type": "Identifier",
                                            "name": "F77"
                                        },
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": []
                                        },
                                        "generator": false,
                                        "expression": false,
                                        "async": false
                                    },
                                    {
                                        "type": "EmptyStatement"
                                    },
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "MemberExpression",
                                                    "computed": false,
                                                    "object": {
                                                        "type": "Identifier",
                                                        "name": "F77"
                                                    },
                                                    "property": {
                                                        "type": "Identifier",
                                                        "name": "prototype"
                                                    }
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "age"
                                                }
                                            },
                                            "right": {
                                                "type": "FunctionExpression",
                                                "id": null,
                                                "params": [],
                                                "body": {
                                                    "type": "BlockStatement",
                                                    "body": []
                                                },
                                                "generator": false,
                                                "expression": false,
                                                "async": false
                                            }
                                        }
                                    },
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "Identifier",
                                            "name": "F77"
                                        }
                                    }
                                ]
                            },
                            "generator": false,
                            "expression": false,
                            "async": false
                        },
                        "arguments": []
                    }
                }
            ],
            "kind": "var"
        }
    ],
    "sourceType": "script"
}