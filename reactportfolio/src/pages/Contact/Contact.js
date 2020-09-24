import React from 'react'

const Contact = () => {
    return (
        <>
        <h1>This is the home page</h1>
        <form> 
                <section class="form-group">
                  <div class="col-auto">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                      placeholder="name@example.com">
                  </section>
                  <section class="form-group">
                    <div class="col-auto">
                      <label for="exampleFormControlSelect1">Name</label>
                      <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">
                      </select>
                    </section>
                    <section class="form-group">
                      <div class="col-auto">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
                      </section>
                      <section class="form-group">
                          <div class="col-auto">
                        <input class="btn btn-primary" type="submit" value="Submit">
                      </section>
                  

                      </div>
                    </div>
              </form>
        </>
    )
}

export default Contact 