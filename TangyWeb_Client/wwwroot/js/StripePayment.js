﻿redirectToCheckout = function (sessionId) {
    var stripe = Stripe("pk_test_51OHkI5GhXUw8WryJSSQRP6xoGDk4OICDpuL0xg6KEjqwEW8WTia3n8n1CJ7VDnciUYLtw1JDpN1vyuEn8pXAx0se00gzMd5RtM");
    //var stripe = Stripe("pk_test_51JcFLuLzMgCIgSRrMw19EzJALAjYC6j5mooETO1VrDWRziVUKPLyBS5nY4siaaxnTgxWg69QZIQNpUBl06WECbzB00gG4hqVX5"); // tangy
    stripe.redirectToCheckout({ sessionId: sessionId });
    
}