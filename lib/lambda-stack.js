const cdk = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigw = require('aws-cdk-lib/aws-apigateway');

class LambdaStack extends cdk.Stack {
  constructor(parent, id, props) {
    super(parent, id, props);

    const myLambda = new lambda.Function(this, 'MyLambdaFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda-fns')
    });

    const api = new apigw.LambdaRestApi(this, 'MyLambdaApi', {
      handler: myLambda
    });
    
  }
}

module.exports = { LambdaStack }
