import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    {/*Form validations*/}

    // alert(`Regiteration submit: ${email}`);
  };

  return (
    <section>
      <h1>Student Registration</h1>
      <p className="muted">
        Create your portal access. Your email will be used for course updates.
      </p>

      <form onSubmit={handleSubmit} className="card form neon">
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="error">{errors.email}</p>
          )}
            </div>

        <div className="form-row">
           {/*password*/}
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>

          <fieldset className="form-row">
              {/*Radio Button for gender*/}
                  <legend>Gender</legend>
                  <label className="radio">
                  <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  /> Male
                  </label>

                  <label className="radio">
                      <input
                          type="radio"
                          name="gender"
                          value="Female"
                          checked={gender === "male"}
                          onChange={(e) => setGender(e.target.value)}
                      /> Female
                  </label>

              </fieldset>

              {/*Disable the submit button until all requirements met*/}
              <button type="submit" className="btn">Register</button>
      </form>

        <div className="card info">
            <h3>Why Register?</h3>
            <ul className="list">
                <li>📘 Access course materials & assignments</li>
                <li>💬 Join the discussion forum</li>
                <li>🎓 Track your progress & get certified</li>
            </ul>
        </div>
    </section>
);
}
