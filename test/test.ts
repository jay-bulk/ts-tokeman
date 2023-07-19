import test from 'ava'
import sinon from 'sinon'
import getToken from '../src/util/tokens'

test.beforeEach(async t => {
 sinon.stub.getToken().resolves()
})
