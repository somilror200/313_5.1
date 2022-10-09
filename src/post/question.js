import React from 'react';
import {Grid,Form,Button} from 'semantic-ui-react'
const Question = (props) => (
    <>
<Form>
    <Form.Field>
      <label>Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field>
      <label>Describe your problem</label>
      <textarea></textarea>
    </Form.Field>
    <Form.Field>
      <label>Tags</label>
      <input placeholder='Tags' />
    </Form.Field>
    <Grid>
    <Grid.Row>
        <Grid.Column textAlign='right'>
        <Button className='right' type='submit'>Post</Button>
        </Grid.Column>
    </Grid.Row>
    </Grid> 
  </Form>
</>)


export default Question;