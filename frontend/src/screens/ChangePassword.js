import React from 'react'
import { Container, Button, Form } from 'react-bootstrap';

function ChangePassword() {
  return (
    <div>
      <Form  className='registerform'>
                <table>
                    <tr>
                        <td>
                            <label>Password</label>
                        </td>
                        <td colSpan={5}>
                            <Form.Group controlId='password' className='registerform-group'>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Confirm Password</label>
                        </td>
                        <td colSpan={5}>
                            <Form.Group controlId='confirmPassword' className='registerform-group'>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm password'
                                    // value={confirmPassword}
                                    // onChange={(e) => setConfirmPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>  <Button type='submit' variant='primary'>
                            Register
                        </Button></td>
                       
                    </tr>  
                         </table>
            </Form >
    </div>
  )
}

export default ChangePassword