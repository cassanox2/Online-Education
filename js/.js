function execRecursively(fn, subject, _refs = new WeakSet()) {
    // Avoid infinite recursion
    if (_refs.has(subject)) {
      return;
    }


    // Execute a callback function

    fn(subject);
    if (typeof subject === "object" && subject) {
        _refs.add(subject);
        for (const key in subject) {
            execRecursively(fn, subject[key], _refs);
        }
        _refs.delete(subject)
    }

  }
  
  const foo = {
    foo: "Foo",
    bar: {
      bar: "Bar",
    },
  };
  
  foo.bar.baz = foo; // Circular reference!
  execRecursively((obj) => console.log(obj), foo);